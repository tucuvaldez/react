import Card from 'react-bootstrap/Card';
import ItemCount from '../components/ItemCount';
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../app/CartContext';



const ItemDetail = ({ data, onAdd }) => {
    const [count, setCount] = useState(0)
    const { addToCart, updateCart } = useContext(CartContext)


    onAdd = (c) => {
        setCount(c);
        addToCart(data, c)
        updateCart(data)
    }

    return (
        <div >
            <Card className="detail" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title>{data.marca}</Card.Title>
                    <Card.Text>
                        ${data.precio}
                    </Card.Text>
                    {count === 0 ?
                        <ItemCount stock={data.stock} onAdd={onAdd} initial={0} />
                        :
                        <Link className="lnkCompra" to='/cart/'>
                            <Button variant="primary">Terminar mi compra</Button>

                        </Link>
                    }
                </Card.Body>
            </Card>
        </div >
    )
}

export default ItemDetail