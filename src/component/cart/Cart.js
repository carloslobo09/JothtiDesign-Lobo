import React from 'react';
import {Link} from 'react-router-dom'
import {useCartContext} from '../../context/cartContext'
import './cart.css'
const Cart = () => {
    const {items, removeItems, clearItems, total, getUnits} = useCartContext();
    return (
        <>
        <section className="section section-xl bg-default">
            
            <div className="container">
                <div className="table-custom-detail">
                    <table className="table-custom table-cart">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(x=> 
                             <tr key={x.id}>
                                <td><img src={x.image} alt="producto" className="img-table"/></td>
                                <td><Link to={`/item/${x.id}`}>{x.title}</Link></td>
                                <td style={{color:'green'}}>${x.price}</td>
                                <td>
                                    <div className="table-cart-stepper">
                                    <strong>{x.qty}</strong>
                                    </div>
                                </td>
                                
                                <td>${x.price*x.qty}</td>
                                <td><button className="btn btn-warning" onClick={() => removeItems(x.id)}>Quitar Productos</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <center>
                    <div className="group-md group-middle">
                        <h1>Total ${total()}</h1>
                    </div>
                    <button className="btn btn-danger" onClick={clearItems}>Vaciar Carrito</button>
                    <Link to={'/'}><button  className="btn btn-success" onClick={clearItems} >Checkout</button></Link>
                </center>
            </div>
      </section>
      {/* <CheckOutContainer items={items} total={total} getUnits={getUnits} clearItems={clearItems}/> */}
      </>
    )
}
export default Cart;