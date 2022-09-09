import React from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting, item }) => {

    const onAdd = (cant) => {
        alert(`Se agregaron ${cant} unidad al carrito`)
    }

    return (
        <>
            <p>{greeting}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList item={item} />
        </>
    )
}

export default ItemListContainer