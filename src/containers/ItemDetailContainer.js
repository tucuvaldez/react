import { useState, useEffect } from 'react'
import ItemDetail from '../pages/ItemDetail'
import { listaVino } from '../Api'
import { useParams } from 'react-router-dom'

const getItem = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaVino)
        }, 2000)
    });
    return task;
}

const ItemDetailContainer = ({ onAdd }) => {

    const [data, setData] = useState();
    const { detalleId } = useParams()

    useEffect(() => {
        getItem().then(response => setData(response.find(item => item.id === parseInt(detalleId))))
    })
    return data && <ItemDetail data={data} onAdd={onAdd} />
}


export default ItemDetailContainer