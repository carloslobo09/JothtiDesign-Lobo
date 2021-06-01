import React from 'react';
import {Link} from 'react-router-dom';

const ItemDetail = ({datos}) =>{
        return(
                        <div key={datos.id}>
                                <br/><br/>
                                <Link to={'/'} style={{width:'200px', position:'absolute', top:100, left:1081}}><button className="btn btn-lg btn-outline-primary" >Volver a la lista </button></Link>
                                <div className="container">
                                        <div className="row">    
                                                <div className="col-sm-4">
                                                <img src={datos.image} style={{ width: "100%", height: "320px" }} />
                                                </div>
                                                <div className="col-sm-8">
                                                        <h5 style={{fontSize:"60px"}}>{datos.title}</h5>
                                                        <h1 style={{color:"green"}}>${datos.price}</h1>
                                                        <ul className="list-group list-group-flush">
                                                                <li className="list-group-item"></li>
                                                                <li className="list-group-item"></li>
                                                        </ul>
                                                        <p>{datos.descripcion}</p>
                                                </div>
                                        </div>   
                                </div>
                                <br />
                        </div>        
        )
}
export default ItemDetail;

