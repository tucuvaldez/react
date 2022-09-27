import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../app/CartContext';

const CartDetail = ({ item }) => {
    const { removeProduct } = useContext(CartContext)

    return (
        <div className='cartDetail col-md-3'>

            <Card >
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        Unidades: {item.quantity}
                    </Card.Text>
                    <Card.Text>
                        Precio por unidad: {item.price}
                    </Card.Text>
                    <Card.Text>
                        Sub total: {item.precioTotal}
                    </Card.Text>
                    <Button onClick={() => { removeProduct(item.id) }} variant="danger">Eliminar Producto</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CartDetail