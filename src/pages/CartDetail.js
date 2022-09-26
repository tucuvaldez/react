import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../app/CartContext';

const CartDetail = ({ item }) => {
    const { removeProduct, updateCart } = useContext(CartContext)

    return (
        <div className='cartDetail'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.marca}</Card.Title>
                    <Card.Text>
                        Precio total: {item.precioTotal}
                    </Card.Text>
                    <Card.Text>
                        Unidades: {item.quantity}
                    </Card.Text>
                    <Button onClick={() => { removeProduct(item.id); updateCart() }} variant="danger">Eliminar Producto</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CartDetail