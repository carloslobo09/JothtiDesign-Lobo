import React from 'react';
import Remera from '../../assets/remera.jpg'


const Items = ({id,title,price,descripcion,img,width}) =>{
    console.log({img})
        return(
        <React.Fragment>
           
                <div className="col-sm-4">
                    <div className="card" style={{width}}>
                        <img  width='70%' src={Remera}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <small>$</small>
                            <strong>{price}</strong>
                            <p className="card-text">{descripcion}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        )
}

export default Items;
