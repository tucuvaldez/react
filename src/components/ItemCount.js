import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cant, setCant] = React.useState(0);
    const [quantity, setQuantity] = React.useState(stock)
    const decrease = () => {
        setCant(cant - 1);
        setQuantity(quantity + 1);
    }
    const increase = () => {
        setCant(cant + 1);
        setQuantity(quantity - 1)
    }


    return (
        <div className='counter'>
            <Button onClick={
                () => { decrease() }}
                disabled={cant === initial}
            >
                -
            </Button>
            <Card.Text>{cant}</Card.Text>
            <Button onClick={() => { increase() }}
                disabled={cant === stock}>
                +
            </Button>
            <Button variant='success' onClick={() => onAdd(cant)}>Agregar al Carrito</Button>
            <Card.Text>Stock disponible:{quantity}</Card.Text>
        </div>

    )
}

export default ItemCount