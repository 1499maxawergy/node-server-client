import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <nav className="p-3 navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to='/'>(U)sers</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {user.isAuth &&
                    <div className="navbar-nav">
                    <span className="nav-item nav-link" onClick={logOut}>Logout</span>
                        {user.isAdmin && <span className="nav-item nav-link" onClick={() => navigate('/admin')}>Admin</span>}
                    </div>}
                {!user.isAuth &&
                    <div className="navbar-nav">
                    <span className="nav-item nav-link" onClick={() => navigate('/login')}>Auth</span>
                    </div>
                }

            </div>
        </nav>
    );
});

export default NavBar;