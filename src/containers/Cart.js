
import { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../app/CartContext'
import CartDetail from '../pages/CartDetail';



export const Cart = () => {
    const { carrito } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)
    return (

        <div className="row cartContainer position-relative" >
            {carrito.length > 0 ?
                <>
                    <Button variant="danger" onClick={() => { clearCart() }} >Limpiar Carrito</Button>
                    {carrito.map(prod => <CartDetail item={prod} key={prod.id} />)}
                </>
                : <div className='position-absolute top-100 start-100 translate-middle mt-5'>
                    <h1>El carrito esta vacio</h1>
                    <Link className="backToShop" to='/' >Volver al inicio</Link>
                </div>}
        </div>
    )

}
