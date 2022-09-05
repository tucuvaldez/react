import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { getProductos } from '../Api';

const ItemListContainer = ({ greeting }) => {
    const [listaVino, setListaVino] = useState([]);

    const onAdd = (cant) => {
        alert(`Se agregaron ${cant} unidad al carrito`)
    }

    useEffect(() => {
        getProductos().then(response => {
            setListaVino(response)
        })
    }, [])

    return (
        <>
            <p>{greeting}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList listaVino={listaVino} />
        </>
    )
}

export default ItemListContainer