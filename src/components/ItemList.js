import React, { useState, useEffect } from 'react'
import Item from './Item'
import { listaVino } from '../Api'
import { useParams } from 'react-router-dom'

export const getProductos = () => {

    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaVino)
        }, 2000)
    });
    return task;
}
const ItemList = () => {

    const [listaVino, setListaVino] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        if (categoriaId) {
            getProductos().then(response => { setListaVino(response.filter(vino => vino.tipoVino === categoriaId)) })
        } else {
            getProductos().then(response => { setListaVino(response) })
        }
    }, [categoriaId])
    return listaVino.map(item => < Item item={item} key={item.id} />)

}

export default ItemList