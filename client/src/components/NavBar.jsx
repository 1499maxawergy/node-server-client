import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import mainLogo from "../static/logo.png";
import jwt_decode from 'jwt-decode';
import '../static/css/main.css';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    let email = 'Unauthorized';
    try {
        email = jwt_decode(localStorage.getItem('token')).email;
    } catch (e) {
        //заглушка от неавторизованных пользователей
    }

    const logOut = () => {
        localStorage.removeItem('token');
        user.setUser({});
        user.setIsAuth(false);
        user.setRole("USER");
    }

    return (
        <nav className="p-3 navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to='/'>
                <img src={mainLogo} width="30" height="30"
                     className="d-inline-block align-top" alt="logo"/>
                AuctionWeb
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className='navbar-nav'>
                    <NavLink to='/lots' className={'text-decoration-none'}>
                    <span className="nav-item nav-link text-light">
                        Лоты
                    </span>
                    </NavLink>
                    <NavLink to='/faq' className={'text-decoration-none'}>
                    <span className="nav-item nav-link text-light">
                        FAQ
                    </span>
                    </NavLink>
                    {user.isAuth &&
                        <div className='nav-link dropdown-toggle text-light' id='userDropdown' role='button'
                             data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            {email}
                        </div>}
                    {user.isAuth && <div className="dropdown-menu bg-dark" aria-labelledby='userDropdown'>
                        {user.isAdmin &&
                            <NavLink to='/admin' className={'text-decoration-none'}>
                            <span className="dropdown-item nav-link text-light">
                                Админ
                            </span>
                            </NavLink>
                        }
                        {user.isAuth &&
                            <NavLink to='/win' className={'text-decoration-none'}>
                            <span className="dropdown-item nav-link text-light">
                                Выигранные лоты
                            </span>
                            </NavLink>
                        }
                        <span className="dropdown-item nav-link text-light" onClick={logOut}>Выйти</span>
                    </div>}
                    {!user.isAuth &&
                        <NavLink to='/login' className={'text-decoration-none'}>
                            <span className="nav-item nav-link text-light">
                                Войти
                            </span>
                        </NavLink>
                    }
                </div>
            </div>
        </nav>
    );
});

export default NavBar;