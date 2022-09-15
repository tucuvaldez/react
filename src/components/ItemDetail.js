import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


const ItemDetail = ({ data, onAdd }) => {

    return (
        <div >
            <Card className="detail" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Title>{data.marca}</Card.Title>
                    <Card.Text>
                        ${data.precio}
                    </Card.Text>
                    <Card.Text>Stock disponible:{data.stock}</Card.Text>
                    <ItemCount stock={data.stock} onAdd={onAdd} initial={0} />
                    <Button variant="primary">Comprar</Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail