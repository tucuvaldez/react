import { useState, useEffect } from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'
import { getItems } from '../app/Api'


const ItemList = ({ toggleSpinnerShow }) => {

    const [listaVino, setListaVino] = useState([]);
    const { categoriaId } = useParams();

    //AQUI SE PERMITE FILTRAR LOS PRODUCTOS SEGUN CATEGORIAS, O MOSTRAR TODOS
    useEffect(() => {
        toggleSpinnerShow(true);
        if (categoriaId) {
            getItems().then(response => {
                setListaVino(response.filter(vino => vino.categoryId === categoriaId));
                toggleSpinnerShow(false);
            })
        } else {
            getItems().then(response => {
                setListaVino(response);
                toggleSpinnerShow(false);
            })
        }
    }, [categoriaId])

    return listaVino.map(item => < Item item={item} key={item.id} />)

}

export default ItemList