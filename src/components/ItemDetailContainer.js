

import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'



const getItem = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    marca: "Los Haroldos",
                    tipoVino: "tinto",
                    varietal: "Malbec",
                    precio: 1200,
                    img: '../assets/los-haroldos-estate-malbec-mrbeef.jpg',
                    id: 1,
                    stock: 8,
                }
            )
        }, 2000)
    });
    return task;
}

const ItemDetailContainer = ({ onAdd }) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        getItem().then(response => {
            setData(response)
        })
    })
    return <ItemDetail data={data} onAdd={onAdd} />
}


export default ItemDetailContainer