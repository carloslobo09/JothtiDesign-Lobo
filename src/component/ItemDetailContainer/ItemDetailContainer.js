import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import loader from '../Images/200.gif'




const ItemDetailContainer = ({}) =>{
    const [Item,setItem]= useState({})

    useEffect(()=>{
        const producto=[
            {
                id:1,
                title:'Remera Gris Lisa',
                price:500,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"data:image/jpeg;base64,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",
                stock: 5,
                category: 'remera'
            }
        ]
        
        const listaProd = new Promise ((resolve, reject)=>{
            setTimeout (()=>{
                resolve(producto)
            },2000)    
            })
            listaProd.then((res)=>{
                setItem(res)
            })
            .catch(()=>{
                console.log("Error al cargar")
            })
            .finally(()=>{
                console.log("Se completo la carga")
            })
    },[])

    

    

        return(
            <React.Fragment>
            <br/><br/><br/><br/>
            <div className='container-fluid'>
                <div className="row">
                    {Item.length > 0 ? <ItemDetail producto={Item} /> : <center><img src={loader}/></center> }
                </div>
            </div>
            </React.Fragment>
        )
}
export default ItemDetailContainer;

