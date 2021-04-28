import React, { useState, useEffect } from 'react';
import Saludo from './Saludo'
import ItemList from './ItemList'




const ItemListContainer = ({tamaño,saludo}) =>{
    const [arrayItems,setArrayItems]= useState([])

    useEffect(()=>{
        const productos=[
            {
                id:'1asdasd',
                title:'Remera Gris Lisa',
                price:500,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"data:image/jpeg;base64,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",
                  
            },
            {
                id:'2asdasd',
                title:'Remera Negro Lisa',
                price:500,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image : "data:image/jpeg;base64,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",
                 
            },
            {
                id:'3asdasd',
                title:'Remera Just Do It',
                price:700,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKrj6sGLuN8AXIG2L_jKBcn3SCj1qAd8KGg&usqp=CAU",
                 
            },
            {
                id:'4asdasd',
                title:'Remera Pintura',
                price:600,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kd4-8voL_LMP-4IeGRrTLk7kvZVM8pIi2Q&usqp=CAU",
                
            },
            {
                id:'4asdasd',
                title:'Remera SABOR',
                price:650,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"data:image/jpeg;base64,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",
                
            },
            {
                id:'4asdasd',
                title:'Remera Adidas',
                price:400,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rHswcdAveqmiWcjMYSXSsXH2rDaaFFC8hA&usqp=CAU",
                
            },
            {
                id:'4asdasd',
                title:'Remera Nike Blanco',
                price:400,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlD_tZ9NN9t0dn9ifmb0FOJjuVeUG0AW05AA&usqp=CAU",
                
            },
            {
                id:'4asdasd',
                title:'Remera Nike Negro',
                price:400,
                descripcion:'Some quick example text to build on the card title and make up the bulk of the cards content.',
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoTs2OUTln1h9Hk_e6tFj6BQVlOXUcdkEcQ&usqp=CAU",
                
            }
        ]
        
        const listaProd = new Promise ((resolve, reject)=>{
            setTimeout (()=>{
                resolve(productos)
            },2000)    
            })
            listaProd.then((res)=>{
                setArrayItems(res)
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
            <div className='m-0 row justify-content-center'>
                <Saludo saludo={saludo} tamaño={tamaño}/>
                <div className="row">
                    {arrayItems.length > 0 ? <ItemList productos={arrayItems} /> : <h1>Cargando...</h1>}
                </div>
            </div>
            </React.Fragment>
        )
}
export default ItemListContainer;

