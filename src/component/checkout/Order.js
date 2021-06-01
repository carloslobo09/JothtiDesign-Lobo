import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import login from '../Images/logincheck.gif'
import { useHistory } from 'react-router-dom'

function Order({ show2, status, orderId, clearItems, message, handleClose }) {
  let history = useHistory()

  useEffect(() => {
    if (orderId) {
      clearItems()
    }
  }, [orderId])

  function routeChange() {
    history.push('/')
  }
  return (
    <Modal show={show2} onHide={handleClose} style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <Modal.Header>
        <Modal.Title style={{ fontFamily: "Arial, Helvetica, sans-serif" }}><h2>Gracias por su Compra!</h2></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show2 ? <><h3 className="list-group-item list-group-item-success">{status}</h3> {orderId && <h4>Este es su N° de seguimiento:<strong> {orderId}</strong></h4>}</> : message ? <p className="email-err">{message}</p> : <img className="img-order" src={login} alt="loader" />}
      </Modal.Body>
      <Modal.Footer>
        {message ?
          <Button variant="success" onClick={handleClose}>Volver</Button>
          :
          <Button variant="secondary" disabled={!show2} onClick={() => routeChange()}>Close</Button>}
      </Modal.Footer>
    </Modal>
  )
}
export default Order;