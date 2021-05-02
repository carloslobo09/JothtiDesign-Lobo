import React from 'react';



const ItemDetail = ({producto}) =>{
        return(
                <>
                {producto.map((producto)=>
                        <div key={producto.id}>
                                <br/><br/>
                                <div className="container">
                                        <div className="row">    
                                                <div className="col-sm-4">
                                                <img src={producto.image} style={{ width: "100%", height: "350px" }} />
                                                </div>
                                                <div className="col-sm-8">
                                                        <h5 style={{fontSize:"60px"}}>{producto.title}</h5>
                                                        <h1 style={{color:"green"}}>${producto.price}</h1>
                                                        <ul className="list-group list-group-flush">
                                                                <li className="list-group-item"></li>
                                                                <li className="list-group-item"></li>
                                                        </ul>
                                                        <p>{producto.descripcion}</p>
                                                </div>
                                        </div>   
                                </div>
                                <br />
                        </div>
                )}         
                
                </>
        )
}
export default ItemDetail;

