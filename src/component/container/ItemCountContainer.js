import React, {useState, useEffect} from 'react';
import ItemCount from '../itemCount/ItemCount'


const ItemCountContainer = ({ stock, onAdd}) => {
    const [stockTotal, setStockTotal] = useState(stock);
    const [stockV, setStockV] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo,setActivo]=useState(false)
    const count = stockV;


    useEffect(() => {
      setStockTotal(stock);

      if(stockTotal === 0){
        setBotonActivo(false);
        if(stockV > 0){
          setBotonActivo(true);
        }
      }
    }, [stockTotal,stockV,stock])
    
    
    const sumar = () => {
      
       if(stockTotal > 0 && (stockV < 5)){
      setStockV( stockV + 1 );
      setActivo(true)
      }
    }


    const restar =()=>{
      if(stockV === 0){
        setActivo(false)
        setStockV(0);
      }
      else if(stockTotal >= 0 ){
      setStockV (stockTotal+1)
        
      }
    }
    return (
        <ItemCount  stockV={stockV} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>
    )
}
export default ItemCountContainer;