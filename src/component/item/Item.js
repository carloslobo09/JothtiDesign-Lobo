import React from 'react';
import { Link } from 'react-router-dom'
import './card.css'

const Items = ({ producto }) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="card" style={{ width: "15rem" }}>
                    <Link to={`/item/${producto.id}`}>
                        <img src={producto.image} style={{ width: "100%", height: "200px" }} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <strong>${producto.price}</strong>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"></li>
                            <p>{producto.descripcion}</p>
                            <Link to={`/item/${producto.id}`}>
                                <a>Ver mas</a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </React.Fragment>
    )
}

export default Items;
