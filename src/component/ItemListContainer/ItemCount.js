import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const ItemCount = ({stock}) =>{

    const [stockTotal,setStockTotal] = useState(stock)
    const [stockV, setStockV] = useState(0)

    const sumar = () =>{
        let disabled=""
        if (stockTotal===0) {
            disabled="disabled"
        } else {
            setStockV(stockV + 1)
            setStockTotal(stockTotal - 1)
        }
    }
    const restar = () =>{
        let disabled=""
        if ( stockV===0) {
            disabled="disabled"
        } else {
            setStockV(stockV - 1)
            setStockTotal(stockTotal + 1)
        }
    }
    const onAdd = () => {
        let compra=stockTotal
        let className="btn"
        if (compra===0) {
            className="btn btn-primary"
        }
    }


        return(
                <>
                
                        <div >
                            <p><strong>Cantidad en stock: {stockTotal}</strong></p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"></li>
                                <li className="list-group-item"></li>
                            </ul>
                            <div className="d-flex justify-content-between">
                                <button className='btn btn-primary d-flex justify-content-start' onClick={restar}><FontAwesomeIcon icon={faMinus} /></button>
                                {stockV}
                                <button className='btn btn-primary d-flex justify-content-end' onClick={sumar}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <br/>
                            <center><a className="btn btn-primary" onClick={onAdd}>Comprar</a></center>
                        </div>
                        
                
                </>
        )
}
export default ItemCount;

