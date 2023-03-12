import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Greet from "../pages/Greet";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    const roleAccess = user.isAdmin;
    console.log({user});
    return (
        <Routes>
            <Route path='*' element={<Greet/>}/>
            <Route path='/login' element={<Auth/>}/>
            <Route path='/registration' element={<Auth/>}/>
            { roleAccess && <Route path='/admin' element={<Admin/>}/>}
        </Routes>
    );
};

export default AppRouter;