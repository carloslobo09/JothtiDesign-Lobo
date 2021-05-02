import React from 'react';
import Imagen from './NavBarFc/Imagen'
import CartWidget from './NavBarFc/CartWidget'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar= () =>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <Link to={`/`}>
                    <a className="navbar-brand ">
                     <Imagen />
                    </a>
                    </Link>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <Dropdown>
                                <Dropdown.Toggle variant="default" id="dropdown-basic">
                                    Categorias
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Link to={`/category/remera`}>
                                    <Dropdown.Item >Remeras</Dropdown.Item>
                                    </Link>
                                    <Link to={`/category/short`}>
                                    <Dropdown.Item >Shorts</Dropdown.Item>
                                    </Link>
                                    <Link to={`/category/bolso`}>
                                    <Dropdown.Item >Bolsos</Dropdown.Item>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                            <li className="nav-item">
                                <a className="nav-link active" href='#'>¿Quienes Somos?</a>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        )
}
export default NavBar;




