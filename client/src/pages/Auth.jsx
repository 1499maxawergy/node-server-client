import React, {useContext, useState} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigation = useNavigate();
    const isLogin = location.pathname === '/login';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const universal = async (e) => {
        e.preventDefault();
        try{
            let data;
            if (isLogin) {
                data = await login(email, password);
                user.setRole(data.role);
                console.log(data);
            }
            else{
                data = await registration(email, password);
                console.log(data);
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigation('/');
        } catch (e) {
            alert(e.response.data.message);
        }
    };
    return (
        <div className='container d-flex justify-content-center align-items-center p-4'>

                <form className='d-flex flex-column'>

                    <h3 className='text-decoration-underline'>{isLogin && 1 ? 'Login page' : 'Register page'}</h3>
                    <input type='email' onChange={e => setEmail(e.target.value)} value={email} className='mt-2 form-control' placeholder='Enter email..'/>
                    <input type='password' onChange={e => setPassword(e.target.value)} value={password} className='mt-2 form-control' placeholder='Enter password..'/>

                    {isLogin &&
                    <div className="mt-3 btn-group" aria-label="Basic example">
                        <button onClick={universal} className='btn btn-dark border-danger'>Enter</button>
                        <button className='btn btn-dark border-danger'><NavLink className='text-decoration-none text-white' to='/registration'>To Register page</NavLink></button>
                    </div>
                    }
                    {!isLogin &&
                        <button onClick={universal} className='mt-3 btn btn-dark border-danger'>Register</button>
                    }
                </form>

        </div>
    );
});

export default Auth;