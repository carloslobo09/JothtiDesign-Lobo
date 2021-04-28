import React from 'react';
import ItemCount from './ItemCount'

const Items = ({producto}) =>{
    console.log(producto)
        return(
        <React.Fragment>
           
                    <div className="card" style={{width: "14rem" }}>
                        <img src={producto.image} style={{width: "100%" , height:"200px"}} />
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <strong>${producto.price}</strong>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
                            </ul>
                            <p className="card-text">{producto.descripcion}</p>
                            <ItemCount stock={producto.stock} />
                            
                        </div>
                    </div>
        </React.Fragment>
        )
}

export default Items;
