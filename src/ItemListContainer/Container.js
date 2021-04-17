import React from 'react';
import Items from '../ItemListContainer/ItemsFc/itemsfc'

export default class Container extends React.Component{
    render(){
        return(
            <div className='m-0 row justify-content-center'>
                <Items saludo={this.props.saludo} tamaño={this.props.tamaño}/>
            </div>
        )
    }
}



