import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {getAllLots} from "../http/userAPI";
import {Spinner} from "react-bootstrap";
import CreateLot from "../components/modals/createLot";
import { Buffer } from 'buffer';
import DeleteLot from "../components/modals/deleteLot";
import UpdateLot from "../components/modals/updateLot";

const AdminLots = observer(() => {
    const [loading, setLoading] = useState(true);
    const [lots, setLots] = useState([]);
    const [createVisible, setCreateVisible] = useState(false);
    const [updateVisible, setUpdateVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);

    function convertBufferToStr(lots){
        for (let i = 0; i < lots.data.length; i++) {
            const buffer = Buffer.from(lots.data[i].image);
            lots.data[i].image = buffer.toString();
        }
        return lots;
    }

    useEffect(() => {
        setTimeout(() => {
            getAllLots().then(data => {
                let lots = convertBufferToStr(data);
                setLots(lots);
            }).finally(() => setLoading(false))
        }, 1000);}, []);


    const reload = async () => {
        setLoading(true);
        setTimeout(() => {
            getAllLots().then(data => {
                let lots = convertBufferToStr(data);
                setLots(lots);
            }).finally(() => setLoading(false))
        }, 1000);
    }


    if (loading) {
        return(
            <div className='d-flex align-items-center'>
                <strong>Loading...</strong>
                <Spinner className='ms-auto' role='status' />
            </div>
        );
    }


    return (
        <div className='container-fluid'>
            <h3 className='text-decoration-underline text-center'>Лоты</h3>
            <div className='d-flex flex-column'>
                <div className='table-responsive-xl'>
                    <table className='table table-dark'>
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Start Price</th>
                            <th scope="col">Current Price</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {lots.data.map(function (data, index){
                            return(
                                <tr key={index}>
                                    <th scope='row'>{data.id}</th>
                                    <th scope='row'>{data.name}</th>
                                    <th scope='row'>{data.description}</th>
                                    <th scope='row'><img className='img-thumbnail' src={data.image} alt='lotimg'/></th>
                                    <th scope='row'>{data.startPrice}</th>
                                    <th scope='row'>{data.currentPrice}</th>
                                    <th scope='row'>{data.startTime}</th>
                                    <th scope='row'>{data.endTime}</th>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>

                <div className="btn-group mt-4 mb-4" role="group" aria-label="Basic example">
                    <button onClick={() => setCreateVisible(true)} type="button" className="border-danger border-2 btn btn-dark">Create</button>
                    <button onClick={() => setDeleteVisible(true)} type="button" className="border-danger border-2 btn btn-dark">Delete</button>
                    <button onClick={() => setUpdateVisible(true)} type="button" className="border-danger border-2 btn btn-dark">Update</button>
                </div>

            </div>
            <CreateLot reload={reload} show={createVisible} onHide={() => setCreateVisible(false)}/>
            <DeleteLot reload={reload} lots={lots.data} show={deleteVisible} onHide={() => setDeleteVisible(false)}/>
            <UpdateLot reload={reload} lots={lots.data} show={updateVisible} onHide={() => setUpdateVisible(false)}/>
        </div>
    );
});

export default AdminLots;