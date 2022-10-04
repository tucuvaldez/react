import { useContext, useState, } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createItem } from '../app/Api';
import { CartContext } from '../app/CartContext'
import CartDetail from '../pages/CartDetail';



export const Cart = () => {
    const { carrito } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)
    const { precioTotal } = useContext(CartContext)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [spinnerShow, setSpinnerShow] = useState(false)

    const order = {
        item: [],
        buyer: { nombre: name, email: email, telefono: phone },
        date: '',
        total: precioTotal
    }


    const submit = (e) => {
        e.preventDefault()
        setSpinnerShow(true)
        order.item = carrito.map(prod => ({ price: prod.price, quantity: prod.quantity, id: prod.id, name: prod.description }));
        order.date = new Date();
        console.log(order)
        createItem(order, 'orders')
            .then((id) => {
                setSpinnerShow(false)
                alert(`Su codigo de orden es ${id}`)
            })
    }

    return (

        <div className="cartContainer " >
            {carrito.length > 0 ?
                <>
                    <div>
                        {spinnerShow &&
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                        <Form onSubmit={submit}>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Nombre y Apellido" value={order.nombre} onChange={e => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail" >
                                <Form.Label>Direccion Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={order.email} onChange={e => setEmail(e.target.value)} />
                                <Form.Text className="text-muted">
                                    Nunca compartiremos tu email con nadie.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Numero de telefono</Form.Label>
                                <Form.Control type="number" placeholder="Enter phone" value={order.telefono} onChange={e => setPhone(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Finalizar Compra
                            </Button>
                        </Form>
                        <Button className="btn m-3 position-relative end-0" variant="danger" onClick={() => { clearCart() }} >Limpiar Carrito</Button>
                        <div>
                            <p>Precio Total: {precioTotal}</p>
                        </div>
                    </div>
                    <div className='row'>
                        {carrito.map(prod => <CartDetail item={prod} key={prod.id} />)}
                    </div>
                </>
                : <div className='emptyCart mt-5'>
                    <h1>El carrito esta vacio</h1>
                    <Link className="backToShop" to='/' >Volver al inicio</Link>
                </div>}
        </div >
    )

}
