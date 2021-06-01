import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Saludo from '../saludo/Saludo'
import ItemList from '../itemlist/ItemList'
import PageError from '../error/PageError'
import loader from '../Images/200.gif'
import { getFirestore } from '../../Firebase'

const ItemListContainer = ({ tamaño, saludo }) => {
    const [arrayItems, setArrayItems] = useState({});
    const [notFound, setNotFound] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const ItemsCollection = db.collection("items");
        const filterCollection = id ? ItemsCollection.where('category', '==', id) : ItemsCollection;
        filterCollection.get()
            .then((querySnapShot) => {
                const documents = querySnapShot.docs.map((doc) => {
                    if (doc == null) {
                        setNotFound(true)
                    }
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                setArrayItems(documents)
            })
            .catch((err) => console.log(`Ocurrio un error `, err))
            .finally(() => console.log("Se completo la carga"))
    }, [id])

    return (
        <React.Fragment>
            <br /><br /><br /><br />
            <div className='container-fluid'>
                <Saludo saludo={saludo} tamaño={tamaño} />
                <div className="row">
                    {notFound === true ? <PageError /> : arrayItems.length > 0 ? <ItemList productos={arrayItems} /> : <img src={loader} style={{ width: '30%', position: 'absolute', top: '50%', left: '35%' }} />}
                </div>
            </div>
        </React.Fragment>
    )
}
export default ItemListContainer;

