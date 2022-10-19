import { useState, useEffect } from 'react'
import ItemDetail from '../pages/ItemDetail'
import { useParams } from 'react-router-dom'
import { getItemById } from '../app/Api'


const ItemDetailContainer = ({ onAdd }) => {

    const [data, setData] = useState();
    const { detalleId } = useParams()

    useEffect(() => {
        getItemById(detalleId).then(response => setData(response))
    })
    return (
        data && <ItemDetail data={data} onAdd={onAdd} />
    )
}


export default ItemDetailContainer