import React from 'react';
import Items from '../item/Item'

const ItemList = ({ productos }) => {
        return (
                <>
                        {productos.map((dato) =>
                                <div key={dato.id} className="col-sm-3">
                                        <Items producto={dato} />
                                </div>
                        )}

                </>
        )
}
export default ItemList;

