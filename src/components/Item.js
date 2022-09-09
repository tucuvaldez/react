import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'


export const Item = ({ item }) => {

    const onAdd = (cant) => {
        alert(`Se agregaron ${cant} unidad al carrito`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.marca}</Card.Title>
                    <Card.Text>
                        El sabor de un vino unico
                    </Card.Text>
                    <Card.Text>
                        ${item.precio}
                    </Card.Text>
                    <ItemCount stock={item.stock} onAdd={onAdd} initial={0} />
                    <Button variant="primary">Comprar</Button>

                </Card.Body>
            </Card>
        </div>
    )
}


export default Item;