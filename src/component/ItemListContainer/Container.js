import React from 'react';
import Items from '../ItemListContainer/ItemsFc/itemsfc'

const Container = ({tamaño,saludo}) =>{
        return(
            <div className='m-0 row justify-content-center'>
                <Items saludo={saludo} tamaño={tamaño}/>
            </div>
        )
}
export default Container;


