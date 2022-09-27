import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({ item }) => {

    return (

        <div className="cards col-12 col-md-3 ">
            <Card>
                <Link to={`/detalles/${item.id}`} >
                    <Card.Img variant="top" src={item.image} />
                </Link>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Link className='detalle' to={`/detalles/${item.id}`} >Ver Detalle</Link>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Item;