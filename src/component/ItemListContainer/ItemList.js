import { faDailymotion } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Items from './Item'



const ItemList = ({productos}) =>{
        return(
                <>
                {productos.map((dato)=>
                        <div key={dato.id} className="col-sm-3">
                                <Items producto={dato}  /> 
                        </div>
                )}         
                
                </>
        )
}
export default ItemList;

