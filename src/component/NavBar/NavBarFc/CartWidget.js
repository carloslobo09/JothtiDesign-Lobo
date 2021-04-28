import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const CartWidget = () =>{
    return(
        
            <button className=" btn btn-outline-danger">
                <h4>Carrito<FontAwesomeIcon icon={faShoppingCart} /></h4>
            </button>
    )
}
export default CartWidget;


