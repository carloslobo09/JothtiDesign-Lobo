import React from 'react';
import {Link} from 'react-router-dom'

const Items = ({producto}) =>{
    console.log(producto)
        return(
        <React.Fragment>
           
                    <div className="card" style={{width: "14rem" }}>
                        <Link to={`/item/${producto.id}`}>
                        <img src={producto.image} style={{width: "100%" , height:"200px"}} />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <strong>${producto.price}</strong>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
                            </ul>
                        </div>
                    </div>
                    <br/>
        </React.Fragment>
        )
}

export default Items;
