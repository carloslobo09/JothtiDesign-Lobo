import React from 'react';


const Saludo = ({saludo, tamaño}) =>{
    console.log(tamaño)
    return(
        
        <greeting style={{fontSize:tamaño}} className='text-center'>
            {saludo}
        </greeting>
        
    )
}

export default Saludo;