
import { Link } from 'react-router-dom'



const CartWidget = () => {

    return (
        <>
            <Link className='carrito' to='/cart/' >

                <img src='/assets/baseline_shopping_cart_black_24dp.png' alt="cart" />
                <p id="cantidadCarrito">0</p>

            </Link>
        </>
    )
}



export default CartWidget