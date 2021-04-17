import React from 'react';


const Items = ({saludo, tamaño}) =>{
    console.log(tamaño)
    return(
        
        <greeting style={{fontSize:tamaño}} className='text-center'>
            {saludo}
        </greeting>
        
    )
}

export default Items;