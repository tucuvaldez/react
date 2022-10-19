import { useContext, useState, } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createItem } from '../app/Api';
import { CartContext } from '../app/CartContext';
import CartDetail from '../pages/CartDetail';
import swal from 'sweetalert';
import Spinners from '../components/Spinner';

export const Cart = () => {

    const { carrito, clearCart, precioTotal } = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkEmail, setCheckEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [showSpinner, setShowSpinner] = useState(false)

    const order = {
        item: [],
        buyer: { nombre: name, email: email, telefono: phone },
        date: '',
        total: precioTotal
    }
    //REALIZO UN CHECKEO DE DATOS EN FORM, PARA HABILITAR EL BOTON DE COMPRA
    const checkButtonState = () => {
        return (name === '' || email === '' || phone === '' || checkEmail === '')
    }

    //AL EJECUTAR SUBMIT, CREO UNA ORDEN DE COMPRA CON LOS DATOS INGRESADOS Y LOS PRODUCTOS SELECCIONADOS, Y SE ENVIA A LA BASE DE DATOS
    const submit = (e) => {
        e.preventDefault()
        if (email === checkEmail) {
            setShowSpinner(true)
            order.item = carrito.map(prod => ({ price: prod.price, quantity: prod.quantity, id: prod.id, name: prod.description }));
            order.date = new Date();
            createItem(order, 'orders')
                .then((id) => {
                    setShowSpinner(false)
                    swal({
                        title: "Gracias por tu compra!",
                        text: `Tu código de compra es ${id}!`,
                        icon: "success",
                        button: "Salir!",
                    });
                    clearCart()
                })
        } else {
            swal({
                title: "Las direcciones de email no coinciden",
                text: 'Por favor corrobore su email',
                icon: "error",
                button: "Salir!",
            });
        }

    }

    return (

        <div className="cartContainer " >
            {carrito.length > 0 ?
                <>
                    <div>
                        <Spinners show={showSpinner} />

                        <Form className="mt-3" onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Nombre y Apellido" value={order.nombre} onChange={e => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail" >
                                <Form.Label>Direccion Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={order.email} onChange={e => setEmail(e.target.value)} />
                                <Form.Label>Confirmar Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={order.checkEmail} onChange={e => setCheckEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Numero de telefono</Form.Label>
                                <Form.Control type="number" placeholder="Enter phone" value={order.telefono} onChange={e => setPhone(e.target.value)} />
                            </Form.Group>
                            <Button disabled={checkButtonState()} variant="success" type="submit">
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
