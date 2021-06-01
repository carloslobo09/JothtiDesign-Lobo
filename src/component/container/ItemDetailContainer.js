import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import loader from '../Images/200.gif'
import { Link, useParams } from 'react-router-dom';
import ItemCountContainer from './ItemCountContainer';
import PageError from '../error/PageError'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from '../../context/cartContext'
import { getFirestore } from '../../Firebase'

const ItemDetailContainer = ({ }) => {
    const [datos, setDatos] = useState({})
    const { id } = useParams()
    const [notFound, setNotFound] = useState(false);
    const { addItems, items, tost } = useCartContext()
    const [show, setShow] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const ItemDetail = itemCollection.doc(id);
        ItemDetail.get().then((doc) => {
            if (!doc.exists) {
                setNotFound(true);
            }
            setDatos({ id: doc.id, ...doc.data() });
        }).catch((err) => console.log('ocurrio un error', err))
            .finally(() => console.log('finalizo'))
    }, [id])

    const onAdd = (count) => {
        addItems(count, datos)
        setShow(!show)
        items.length === 4 ? toast.warning('🚫 Carrito LLeno!!') :
            tost ?
                toast.error('❌ supera cantidad de stock !')
                :
                toast.success('✓ Agregado al carrito!')
    }

    return (
        <React.Fragment>
            <br /><br /><br /><br />
            <div className='container'>
                <div className="row">
                    {notFound === true ? <PageError /> : datos.length != {} ? <ItemDetail datos={datos} /> : <center><img src={loader} /></center>}
                    {show ? datos != {} ? <ItemCountContainer stock={datos.stock} onAdd={onAdd} />
                        : <br />
                        : items.length == 4 ? <h1>Superaste la capacidad del carrito!</h1>
                            : <div>
                                <Link to={'/cart'} style={{ width: '230px', position: 'absolute', top: 400, left: 740 }}>
                                    <button className="btn btn-lg btn-success" >Terminar mi Compra</button>
                                </Link>
                            </div>}
                    {<ToastContainer />}
                </div>
            </div>
            <br />
        </React.Fragment>
    )
}
export default ItemDetailContainer;

