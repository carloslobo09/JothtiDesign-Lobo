import React from 'react';
import Imagen from './NavBarFc/imagen'
import Links from './NavBarFc/links'


export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                     <Imagen />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Links texto={'Home'}/>
                            <Links texto={'Tienda'}/>
                            <Links texto={'Redes'}/>
                            <Links texto={'¿Quienes Somos?'}/>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}



