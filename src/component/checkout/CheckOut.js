import React, { useEffect, useContext, useState } from 'react';
import './checkout.css'
import Order from './Order';
import { Modal, Button } from 'react-bootstrap';
import { UserContext } from '../../context/userContext';
import { useCartContext } from '../../context/cartContext'
import 'bootstrap/dist/css/bootstrap.min.css';



function Checkout({ show, handleClose, show2, isDisabled, onNameChange, message, onSubmit, status, orderId }) {
  const [cambio, setCambio] = useState(false)
  const { clearItems, total, getUnits } = useCartContext();
  const { user, inicioS } = useContext(UserContext)

  useEffect(() => {
    if (user) {
      setCambio(true)
    }
  }, [inicioS, user, cambio])

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose} style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <Modal.Header>
          <Modal.Title style={{ fontFamily: "Arial, Helvetica, sans-serif" }}><h3><strong>Completa el siguiente formulario</strong></h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!inicioS ? <React.Fragment>
            <ul className="list-group">
              <li className="list-group-item"><h5>Cantidad de productos: {getUnits()}</h5></li>
              <li className="list-group-item list-group-item-success"><h4>Total Pedido: ${total()}</h4></li>
            </ul>
            <div className="form">
              <div className="form-group col-md-7">
                <label>Nombre y Apellido</label>
                <input type="text" className="form-control" size="200" name="nombre" onChange={onNameChange} required />
              </div>
              <div className="form-group col-md-7">
                <label>Email</label>
                <input type="text" className="form-control" size="200" name="email" onChange={onNameChange} required />
              </div>
              <div className="form-group col-md-7">
                <label>Reingrese su Email</label>
                <input type="text" className="form-control" size="200" name="email2" onChange={onNameChange} required />
              </div>
              <div className="form-group col-md-7">
                <label>Telefono</label>
                <input type="number" className="form-control" size="200" name="telefono" onChange={onNameChange} required />
              </div>
              {message && <p className="email-error">{message}</p>}
            </div>
          </React.Fragment> : <p> Confirme su compra {cambio && user.displayName}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" disabled={isDisabled()} onClick={() => onSubmit()}>Confirmar Compra</Button>
        </Modal.Footer>
      </Modal>
      <Order show2={show2} status={status} orderId={orderId} handleClose={handleClose} clearItems={clearItems} message={message} />
    </React.Fragment>
  )
}
export default Checkout;