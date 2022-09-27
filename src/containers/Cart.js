
import { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../app/CartContext'
import CartDetail from '../pages/CartDetail';



export const Cart = () => {
    const { carrito } = useContext(CartContext)
    const { clearCart } = useContext(CartContext)
    const { precioTotal } = useContext(CartContext)
    return (

        <div className="cartContainer " >
            {carrito.length > 0 ?
                <>
                    <div>
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
