import React from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting, item, onAdd }) => {

    return (
        <div className='row mx-5'>
            <p>{greeting}</p>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList item={item} />
        </div>
    )
}

export default ItemListContainer