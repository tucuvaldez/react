import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


const ItemDetail = ({ data, onAdd, stock }) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title>{data.marca}</Card.Title>
                    <Card.Text>
                        ${data.precio}
                    </Card.Text>
                    <ItemCount stock={data.stock} onAdd={onAdd} initial={0} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail