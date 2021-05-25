import React, { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext);


export function CartProvider({ children }) {

  const [items, setItems] = useState([]);
  const[tost, setTost] = useState(false)

  useEffect(() => {
    
  }, [items]);


  const isInCart=(id)=>{
    const enElCart = items.some(x=>x.id === id);
    
    return enElCart;
      
  }

  const getQuantity=(datos,count)=>{
    const filtro = [...items];
      filtro.forEach(i => {
        if(i.id === datos.id){
          if((i.qty += count) > 5){
            i.qty = 5
           setTost(true)
          }
        }  
    })
    setItems(filtro);
  }


  const addItems = (count, datos) => {
    console.log(...items)
    if(isInCart(datos.id)){
      getQuantity(datos,count)
      console.log(datos)
    }
    else{
      if(items.length < 4){
        setItems([...items, {...datos, qty: count}]);
      }
    }
    
  };

  function getUnits(){
    const uni = items.reduce((a,b)=>(a + b.qty),0)
    return uni;
  }

  function total (){
    const preciTotal = items.reduce((a,b)=>(a + (b.price * b.qty)),0)
    
    return preciTotal;
  }
 
  const removeItems = (item) => {
    console.log(item)
    const newItems = items.filter(x=> x.id !== item);
    setItems(newItems);
    console.log('Dato eliminado');
  };


  const clearItems = () => setItems([]);

  return (
    <cartContext.Provider value={{ items, addItems, removeItems, clearItems, total, getUnits, tost }}>
      {children}
    </cartContext.Provider>
  );
}