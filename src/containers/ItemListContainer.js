import React from 'react';
import ItemList from '../components/ItemList'

const ItemListContainer = ({ item }) => {

    return (
        <div className='row mx-5'>

            <ItemList item={item} />
        </div>
    )
}

export default ItemListContainer