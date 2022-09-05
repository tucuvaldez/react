import React from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cant, setCant] = React.useState(0);
    const [quantity, setQuantity] = React.useState(stock)

    return (
        <div className='counter'>
            <Button onClick={
                () => {
                    setCant(cant - 1);
                }}
                disabled={cant <= initial}
            >
                -
            </Button>
            <span>{cant}</span>
            <span>{quantity}</span>
            <Button onClick={() => {
                setCant(cant + 1);
                setQuantity(quantity - 1)
            }}
                disabled={cant === stock}>
                +
            </Button>
            <Button variant='success' onClick={() => onAdd(cant)}>Agregar al Carrito</Button>
        </div>

    )
}

export default ItemCount