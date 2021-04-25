import React from 'react';
import Saludo from './Saludo'
import ItemList from './ItemList'


const ItemListContainer = ({tamaño,saludo,children}) =>{
    console.log({children})
        return(
            <React.Fragment>
            <div className='m-0 row justify-content-center'>
                <Saludo saludo={saludo} tamaño={tamaño}/>
                <ItemList/>
            </div>
            </React.Fragment>
        )
}
export default ItemListContainer;

