import React from 'react';
import './menu2.css'
import { Link } from 'react-router-dom';
import { isAuthenticated, signout } from '../backendjoin/auth';
import { useLocation } from 'react-router-dom';
const Menu2 = () => {
    const changeText = (e) => {
        e.target.style.color = "#90B501"
        e.target.style.borderBottom = "3px solid #90B501";
    }
    const changetext2 = e => {
        e.target.style.color = "Black";
        e.target.style.borderBottom = "None"
    }
    const location = useLocation();
    const link = () => {
        window.location.pathname = "/";
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg static-top">
                <div className="container">
                    <img
                        onClick={link}
                        src={
                            require('../farmlaw.png')}
                        style={{ width: "20%", height: "40%", cursor: 'Pointer' }}
                    >

                    </img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            {(location.pathname == "/Cart" || location.pathname == '/Connect' 
            || location.pathname == '/' || location.pathname == '/Contactus' 
            || location.pathname == '/Login/admin/dashboard' || location.pathname=="/Adding-Products")
                        && (
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} aria-current="page" to="/Aboutus">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Ourlocation">Our Location</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} aria-current="page" to="/Newsevents">News & Events</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{display:isAuthenticated()? "none":"", color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Login">Login</Link>
                                    </li>
                                    {isAuthenticated() &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} onClick={signout} to='/Login'>LogOut</Link>
                                        </li>)}
                                </ul>

                            </div>
                        )}
                    {(location.pathname == '/Aboutus')
                        && (
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ borderBottom: "3px Solid #90B501", color: "#90B501" }} aria-current="page" to="/Aboutus">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Ourlocation">Our Location</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onMouseOver={changeText} style={{ color: "Black" }} onMouseLeave={changetext2} aria-current="page" to="/Newsevents">News & Events</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ display:isAuthenticated()? "none":"",color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Login">Login</Link>
                                    </li>
                                    {isAuthenticated() &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} onClick={signout} to='/Login'>LogOut</Link>
                                        </li>)}
                                </ul>

                            </div>
                        )}
                    {(location.pathname == '/Newsevents')
                        && (
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} aria-current="page" to="/Aboutus">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Ourlocation">Our Location</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ borderBottom: "3px Solid #90B501", color: "#90B501" }} aria-current="page" to="/Newsevents">News & Events</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ display:isAuthenticated()? "none":"",color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Login">Login</Link>
                                    </li>
                                    {isAuthenticated() &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} onClick={signout} to='/Login'>LogOut</Link>
                                        </li>)}
                                </ul>

                            </div>
                        )}
                    {(location.pathname == '/Ourlocation')
                        && (
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} aria-current="page" to="/Aboutus">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ borderBottom: "3px Solid #90B501", color: "#90B501" }} to="/Ourlocation">Our Location</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} aria-current="page" to="/Newsevents">News & Events</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ display:isAuthenticated()? "none":"",color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Login">Login</Link>
                                    </li>
                                    {isAuthenticated() &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} onClick={signout} to='/Login'>LogOut</Link>
                                        </li>)}
                                </ul>

                            </div>)}
                    {(location.pathname == '/Login')
                        && (
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} aria-current="page" to="/Aboutus">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} to="/Ourlocation">Our Location</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} aria-current="page" to="/Newsevents">News & Events</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{display:isAuthenticated()? "none":"", borderBottom: "3px Solid #90B501", color: "#90B501" }} to="/Login">Login</Link>
                                    </li>
                                    {isAuthenticated() &&
                                        (<li className="nav-item">
                                            <Link className="nav-link" style={{ color: "Black" }} onMouseOver={changeText} onMouseLeave={changetext2} onClick={signout} to='/Login'>LogOut</Link>
                                        </li>)}
                                </ul>
                            </div>
                        )}

                </div>
            </nav>
        </>
    )
}
export default Menu2;