import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const ItemCount = ({ stockV, stockTotal, sumar, restar, botonActivo, activo, onAdd, count}) =>{
        return(
                <React.Fragment>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-8">
                            <h2 >Cantidad en stock: {stockTotal}</h2>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
                            </ul>
                            <div className="d-flex justify-content-between">
                                <button className='btn btn-primary d-flex justify-content-start' disabled={!botonActivo} onClick={restar}><FontAwesomeIcon icon={faMinus} /></button>
                                {stockV}
                                <button className='btn btn-primary d-flex justify-content-end' disabled={!botonActivo} onClick={sumar}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <br/>
                            <center><a className="btn btn-primary" onClick={() => onAdd(count)} disabled={!activo}>Comprar</a></center>
                        </div>
                </React.Fragment>
        )
}
export default ItemCount;

