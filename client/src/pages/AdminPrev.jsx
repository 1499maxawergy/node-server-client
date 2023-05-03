import React from 'react';
import {NavLink} from "react-router-dom";

const AdminPrev = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-center'>Доска администрирования</h1>
            <div className="btn-group d-flex text-center mx-auto mt-5" role="group"
                 aria-label="Basic mixed styles example">
                <NavLink className={'text-decoration-none text-light h5 btn btn-dark border-danger border-2'} to='/admin/users'>
                    Пользователи
                </NavLink>
                <NavLink className={'text-decoration-none text-light h5 btn btn-dark border-danger border-2'} to='/admin/lots'>
                    Лоты
                </NavLink>
            </div>
        </div>
    );
};

export default AdminPrev;