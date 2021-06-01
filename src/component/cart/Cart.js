import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import CheckOutContainer from '../../component/container/CheckOutContainer';
import { useCartContext } from '../../context/cartContext'
import vacio from '../Images/vacio.svg'
import './cart.css'
const Cart = () => {
    const { items, removeItems, clearItems, total, getUnits } = useCartContext();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
    }, [items])

    return (
        <React.Fragment>
            <section className="section section-xl bg-default">
                <div className="container">
                    <div className="table-custom-detail">
                        {items.length > 0 ?
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
                                    {items.map(x =>
                                        <tr key={x.id}>
                                            <td><img src={x.image} alt="producto" className="img-table" /></td>
                                            <td><Link to={`/item/${x.id}`}>{x.title}</Link></td>
                                            <td style={{ color: 'green' }}>${x.price}</td>
                                            <td>
                                                <div className="table-cart-stepper">
                                                    <strong>{x.qty}</strong>
                                                </div>
                                            </td>

                                            <td>${x.price * x.qty}</td>
                                            <td><button className="btn btn-warning" onClick={() => removeItems(x.id)}>Quitar Producto</button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            : <br />}
                    </div>
                    <div className="container">
                        <div className="row justify-content-end">
                            {items.length > 0 ?
                                <>
                                    <div className="col-4" style={{ padding: "25px" }}>
                                        <button className="btn btn-danger" onClick={clearItems}>Vaciar Carrito</button>
                                        <Button variant="primary" onClick={handleShow} >Realizar la compra</Button>
                                    </div>
                                    <div className="col-4">
                                        <h1 style={{ padding: "23px", backgroundColor: "#cfc" }}>Total ${total()}</h1>
                                    </div>
                                </>
                                :
                                <div className="col-8"><h1>No hay productos!</h1><img src={vacio} /></div>}
                        </div>
                    </div>
                </div>
                <CheckOutContainer show={show} handleShow={handleShow} handleClose={handleClose} items={items} total={total} getUnits={getUnits} clearItems={clearItems} />
            </section>
        </React.Fragment>
    )
}
export default Cart;