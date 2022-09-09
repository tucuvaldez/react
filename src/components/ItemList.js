import React, { useState, useEffect } from 'react'
import Item from './Item'
import { listaVino } from '../Api'


const getProductos = () => {

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaVino)
        }, 2000)
    });
    return task;
}
const ItemList = () => {

    const [listaVino, setListaVino] = useState([]);
    useEffect(() => {
        getProductos().then(response => {
            setListaVino(response)
        })
    }, [])
    return listaVino.map(item => < Item item={item} key={item.id} />)

}

export default ItemList