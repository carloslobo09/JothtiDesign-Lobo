import React, {useState, useEffect} from 'react';
import ItemCount from '../itemCount/ItemCount'


const ItemCountContainer = ({datos, onAdd}) => {
  
    const [stockTotal, setStockTotal] = useState(datos.stock);
    const [stockV, setStockV] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo,setActivo]=useState(false)
    const count = stockV;


    useEffect(() => {
      if(stockTotal == 0){
        setBotonActivo(false);
        if(stockV > 0){
          setBotonActivo(true);
        }
      }
    }, [stockTotal,stockV])
    
    
    const sumar = () => {
      
       if(stockTotal > 0){
      setStockV( stockV + 1 );
      setStockTotal (stockTotal - 1);
      setActivo(true)
      }
    }


    const restar =()=>{
      if(stockV === 0){
        setActivo(false)
        setStockV(0);
      }
      else if(stockTotal >= 0 ){
      setStockV ( stockV - 1);
      setStockTotal (stockTotal + 1)

      }
    }
    return (
        <ItemCount id={datos.id} stockV={stockV} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>
    )
}
export default ItemCountContainer;