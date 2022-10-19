import { useState } from 'react';
import ItemList from '../components/ItemList'
import Spinners from '../components/Spinner'

const ItemListContainer = ({ item }) => {

    const [spinnerShow, setSpinnerShow] = useState(false)
    const toggleSpinnerShow = (state) => { setSpinnerShow(state) }

    return (
        <div className='listContainer row mx-5'>
            <Spinners show={spinnerShow} />
            <ItemList item={item} toggleSpinnerShow={toggleSpinnerShow} />
        </div>
    )
}

export default ItemListContainer