import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({ item, onAdd }) => {

    return (

        <div className="cards col-12 col-md-4 ">
            <Card>
                <Link to={`/detalles/${item.id}`} >
                    <Card.Img variant="top" src={item.img} />
                </Link>
                <Card.Body>
                    <Card.Title>{item.marca}</Card.Title>
                    <Card.Text>
                        El sabor de un vino unico
                    </Card.Text>
                    <Link className='detalle' to={`/detalles/${item.id}`} >Ver Detalle</Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Item;