import React from 'react';
import Imagen from './NavBarFc/Imagen'
import Links from './NavBarFc/Links'
import CartWidget from './NavBarFc/CartWidget'

const NavBar= () =>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                     <Imagen />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Links texto={'Home'}/>
                            <Links texto={'Lista'}/>
                            <Links texto={'Contactanos!'}/>
                            <Links texto={'¿Quienes Somos?'}/>
                        </ul>
                        
                    </div>
                    <CartWidget />
                </div>
            </nav>
            
        )
}
export default NavBar;




