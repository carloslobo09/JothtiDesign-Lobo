import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'
import "./footer.css"
const Footer = () => {
    return (
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
                        <div className="container">
                            <a href="https://www.instagram.com/jothti_sublimacion/?hl=es" style={{ color: 'white', textDecoration: 'none' }}><FontAwesomeIcon className="icon" size="3x" transform="grow-7" icon={faInstagramSquare} /></a>
                            <a href="https://web.whatsapp.com/" style={{ color: 'white', textDecoration: 'none' }}><FontAwesomeIcon className="icon" size="3x" transform="grow-7" icon={faWhatsappSquare} /></a>
                            <a href="https://www.facebook.com/jose.sublima.5" style={{ color: 'white', textDecoration: 'none' }}><FontAwesomeIcon className="icon" size="3x" transform="grow-7" icon={faFacebookSquare} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                    <a style={{ color: 'white', textDecoration: 'none' }} href="linkedin.com/in/carlos-lobo-9082201b9"> Carlos Lobo </a>
            </div>
        </footer>
    )
}
export default Footer;


