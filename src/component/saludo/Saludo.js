import React from 'react';


const Saludo = ({}) =>{
    return(
        <>
        <div
            className="p-5 text-center bg-image"
            style={{ backgroundImage: "url('https://previews.123rf.com/images/burakov/burakov1804/burakov180401275/100048645-pinturas-bailando-en-el-fondo-blanco-simulaci%C3%B3n-de-salpicaduras-de-tinta-de-colores-en-un-traje-musical.jpg')", backgroundSize:"60% 100%" , backgroundRepeat:"no-repeat", backgroundPosition:"center center", height: "350px" , width:"100%"}}
        >
            <div className="mask" style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <p className="mb-3" style={{fontSize:"80px"}}>¡Bienvendios a Jothti Diseños!</p>
                        <h4 className="mb-3">¿Necesitas un diseño personalizado?</h4>
                        <a className="btn btn-outline-light btn-lg" href="#contactos" role="button">Contactanos</a>
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Saludo;