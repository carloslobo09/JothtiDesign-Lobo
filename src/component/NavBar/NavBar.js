import React from 'react';
import Imagen from '../logo/Logo'
import CartWidget from '../cart/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link to={`/`}>
                    <a className="navbar-brand ">
                        <Imagen />
                    </a>
                </Link>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={`/category/remera`}><a style={{ marginLeft: "30px" }} className="btn btn-secondary " href='#'>Remeras</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/category/short`}><a style={{ marginLeft: "30px" }} className="btn btn-secondary" href='#'>Shorts</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/category/bolso`}><a style={{ marginLeft: "30px" }} className="btn btn-secondary" href='#'>Bolsos</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/quienessomos`} style={{ textDecoration: "none" }}> <a style={{ marginLeft: "220px", textDecoration: "none", color: "black", fontSize: "20px" }} href='#'>¿Quienes Somos?</a></Link>
                        </li>
                    </ul>
                </div>
                <Link to={'/cart'}><CartWidget /></Link>
            </div>
        </nav>
    )
}
export default NavBar;




