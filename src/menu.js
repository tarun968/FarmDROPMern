import React from 'react';
import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
const Menu = () => {
    const location = useLocation();
    return (
        <div>
            <nav className='main-nav'>
                <div className='logo'>
                    <Link className="nav-link" to="/">
                        <img src={
                            require('./farmlaw.png')}
                            style={{ width: "30%", height: "50%" }}
                        ></img>

                    </Link>
                </div>
                <div className="menu-link" id="collapsibleNavbar">

                    {(location.pathname == '/')
                        && (
                            <ul>
                                <li>
                                    <Link className="nav-link" to="/Aboutus">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link" to="/Newsevents">
                                        News & Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link" to="/Ourlocation">
                                        Our Locations
                                    </Link>

                                </li>
                                <li>
                                    <Link className='nav-link' to="/Login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}



                    {(location.pathname == '/Aboutus')
                        && (
                            <ul>
                                <li>
                                    <Link className="nav-link whiteclassName" to="/Aboutus">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link" to="/Newsevents">
                                        News & Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link" to="/Ourlocation">
                                        Our Location
                                    </Link>

                                </li>
                                <li>
                                    <Link className='nav-link' to="/Login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}



                    {(location.pathname == '/Newsevents')
                        && (
                            <ul>
                                <li>
                                    <Link className="nav-link" to="/Aboutus">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link whiteclassName" to="/Newsevents">
                                        News & Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link" to="/Ourlocation">
                                        Our Location
                                    </Link>

                                </li>
                                <li>
                                    <Link className='nav-link' to="/Login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}


                    {(location.pathname == '/Ourlocation')
                        && (
                            <ul>
                                <li>
                                    <Link className="nav-link" to="/Aboutus">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link " to="/Newsevents">
                                        News & Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link whiteclassName" to="/Ourlocation">
                                        Our Location
                                    </Link>

                                </li>
                                <li>
                                    <Link className='nav-link' to="/Login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}

                    {(location.pathname == '/Login')
                        && (
                            <ul>
                                <li>
                                    <Link className="nav-link" to="/Aboutus">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link" to="/Newsevents">
                                        News & Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="nav-link" to="/Ourlocation">
                                        Our Location
                                    </Link>

                                </li>
                                <li>
                                    <Link className='nav-link whiteclassName' to="/Login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        )}
                </div>
            </nav>
        </div>
    )
}
export default Menu;