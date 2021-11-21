import React, { useState, useContext } from 'react'
import firebase from 'firebase/app'
import '../../firebase'
import { getFirestore } from '../../firebase'
import CheckOut from '../checkout/CheckOut'
import { UserContext } from '../../context/userContext';
import { useCartContext } from '../../context/cartContext'

const CheckOutContainer = ({ show, handleShow, handleClose }) => {
  const { items, total } = useCartContext();
  const { user } = useContext(UserContext)
  const [message, setMessage] = useState(null);
  const [orderId, setOrderId] = useState(null)
  const [status, setStatus] = useState(null);
  const [show2, setShow] = useState(false)
  const [usuarioOrder, setUsuarioOrder] = useState({ nombre: '', email: '', email2: '', telefono: '' });

  const isDisabled = () => {
    if (user == null) {
      const { nombre, email, email2, telefono } = usuarioOrder;
      return [nombre, email, email2, telefono].includes('');
    } else {
      setUsuarioOrder(user)
    }
  };

  function onNameChange(evt) {
    setUsuarioOrder({
      ...usuarioOrder,
      [evt.target.name]: evt.target.value
    });
  }

  const onSubmit = () => {
    if (user == null) {
      if (usuarioOrder.email !== usuarioOrder.email2) {
        setMessage("**Parece que los emails que ingresaste no son iguales")
      } else {
        setMessage("");
        createOrder()
      }
    } else {
      setMessage("");
      createOrder()
    }
  }

  function showLoading() {
    setShow(true);
  }

  async function createOrder() {
    const db = getFirestore();
    const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.id));
    const query = await itemsToUpdate.get();
    const batch = db.batch();
    const outOfStock = [];
    const orders = db.collection('orders');
    const newOrder = {
      buyer: [usuarioOrder],
      items: items,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'Orden En Proceso!',
      total: total()
    }
    query.docs.forEach((docSnapshot, idx) => {
      if (docSnapshot.data().stock >= items[idx].qty) {
        batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].qty });
      } else {
        outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
      }
    })

    if (outOfStock.length === 0) {

      await batch.commit();
      try {
        const { id } = await orders.add(newOrder);
        showLoading()
        setOrderId(id);
        setStatus(`Su pedido ha sido procesado`);
      } catch (err) {
        setStatus(err);
      }
    } else {
      showLoading()
      setStatus('los siento, su compra no ha sido procesada');
    }
  }
  
  return (
    <CheckOut show={show} handleClose={handleClose} handleShow={handleShow} show2={show2} isDisabled={isDisabled} onNameChange={onNameChange} message={message} onSubmit={onSubmit} status={status} orderId={orderId} />
  )
}
export default CheckOutContainer;