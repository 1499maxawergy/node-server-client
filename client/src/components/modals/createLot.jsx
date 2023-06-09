import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {addLotOne} from "../../http/userAPI";

const CreateLot = ({show, onHide, reload}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [startPrice, setStartPrice] = useState('');
    const [step, setStep] = useState('');

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const addLot = async (e) => {
        e.preventDefault();
        try {
            if (!name || !description || !image || !startTime || !endTime || !startPrice || !step){
                return -1;
            }
            getBase64(image).then(async base64 => {
                await addLotOne(name, description, base64, startTime, endTime, startPrice, step);
            })
            reload();
        } catch (e) {
            alert(e.response.data.message);
        }

    }

    const handleSelect = (e) => {
        onHide();
        addLot(e);
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size='lg'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Lot
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        required
                        placeholder={"Enter name"}
                        type={"email"}
                        className={'m-2'}
                        onChange={e => setName(e.target.value)}
                        value={name}
                    >
                    </Form.Control>
                    <Form.Control
                        required
                        placeholder={"Enter description"}
                        type={"text"}
                        className={'m-2'}
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    >
                    </Form.Control>
                    <Form.Control
                        required
                        placeholder={"Enter image"}
                        accept={"image/*"}
                        type={"file"}
                        className={'m-2'}
                        onChange={e => setImage(e.target.files[0])}
                    >
                    </Form.Control>
                    <Form.Control
                        required
                        placeholder={"Enter start time"}
                        type={"datetime-local"}
                        className={'m-2'}
                        onChange={e => setStartTime(e.target.value)}
                        value={startTime}
                    >
                    </Form.Control>
                    <Form.Control
                        required
                        placeholder={"Enter end time"}
                        type={"datetime-local"}
                        className={'m-2'}
                        onChange={e => setEndTime(e.target.value)}
                        value={endTime}
                    >
                    </Form.Control>
                    <Form.Control
                        required
                        placeholder={"Enter start price"}
                        type={"text"}
                        className={'m-2'}
                        onChange={e => setStartPrice(e.target.value)}
                        value={startPrice}
                    >
                    </Form.Control>
                    <Form.Control
                        required
                        placeholder={"Enter step"}
                        type={"text"}
                        className={'m-2'}
                        onChange={e => setStep(e.target.value)}
                        value={step}
                    >
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"dark border-2 border-danger"} onClick={onHide}>Close</Button>
                <Button variant={"dark border-2 border-success"} onClick={handleSelect}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateLot;