import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [cant, setCant] = useState(0);
    const [quantity, setQuantity] = useState(stock)
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
            <Card.Body className='contador'>
                <Button size='sm' variant="outline-dark" onClick={() => { decrease() }} disabled={cant === initial}>
                    -
                </Button>
                <Card.Text>{cant}</Card.Text>
                <Button size='sm' variant="outline-dark" onClick={() => { increase() }} disabled={cant === stock}>
                    +
                </Button>
                <Button className='btnCompra' variant='outline-dark' onClick={() => onAdd(cant)}>Agregar al Carrito</Button>
            </Card.Body>
            <Card.Footer>Disponibilidad en stock:{quantity}</Card.Footer>
        </div>

    )
}

export default ItemCount