import React, { useState, useEffect, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext);

export function CartProvider({ children }) {

  const [items, setItems] = useState(localStorage.getItem('Items')
    ? JSON.parse(localStorage.getItem('Items'))
    : []);
  const [tost, setTost] = useState(false)
  const [vacio, setVacio] = useState(false)

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(items));
  }, [items]);

  const isInCart = (id) => {
    const enElCart = items.some(x => x.id === id);
    return enElCart;
  }

  const getQuantity = (datos, count) => {
    const filtro = [...items];
    filtro.forEach(i => {
      if (i.id === datos.id) {
        if ((i.qty += count) > 5) {
          i.qty = 5
          setTost(true)
        }
      }
    })
    setItems(filtro);
  }

  const addItems = (count, datos) => {
    if (isInCart(datos.id)) {
      getQuantity(datos, count)
    }
    else {
      if (items.length < 4) {
        setItems([...items, { ...datos, qty: count }]);
      }
    }
    setVacio(true)
  };

  function getUnits() {
    const uni = items.reduce((a, b) => (a + b.qty), 0)
    if (uni === 0) {
      setVacio(false)
    }
    return uni;
  }


  function total() {
    const preciTotal = items.reduce((a, b) => (a + (b.price * b.qty)), 0)
    return preciTotal;
  }

  const removeItems = (item) => {
    const newItems = items.filter(x => x.id !== item);
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([])
    setVacio(false);
  }
  
  return (
    <cartContext.Provider value={{ items, addItems, removeItems, clearItems, total, getUnits, tost, vacio }}>
      {children}
    </cartContext.Provider>
  );
}