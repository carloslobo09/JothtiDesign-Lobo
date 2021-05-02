import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
const Footer = () =>{
    return(
        <footer id="contactos" className="page-footer font-small bg-primary text-white pt-3">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">¡No dude en consultarnos!</h5>
                        <p>Contactenos para mas informacion sobre prendas totalmente personalizadas a su gusto, y al por mayor!</p>
                        <p> Puede llamarnos a los numeros <strong>(388)8 112233</strong> o al <strong>(388)8 332211</strong>, o contactarnos por nuestras redes sociales. Sin compromiso! </p>
                    </div>
                        <div className="col-md-6 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Redes Sociales</h5>
                            <div className="col-md-3 mb-md-0 mb-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <a style={{color:'white' ,textDecoration:'none'}}><FontAwesomeIcon size="3x" transform="grow-7 left--50 up--10" icon={faInstagramSquare} /></a> 
                                        <a style={{color:'white' ,textDecoration:'none'}}><FontAwesomeIcon size="3x" transform="grow-7 left--80 up--10" icon={faWhatsappSquare} /></a>
                                        <a style={{color:'white' ,textDecoration:'none'}}><FontAwesomeIcon size="3x" transform="grow-7 left--110 up--10" icon={faFacebookSquare} /></a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
            </div>
            </div>
                <div className="footer-copyright text-center py-3">© 2021 Copyright:
                    <a style={{color:'white' ,textDecoration:'none'}} href="https://www.facebook.com/CIL1997"> carloslobo.com.ar</a>
                </div>
        </footer>
    )
}
export default Footer;


