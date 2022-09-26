
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../app/CartContext'



const CartWidget = () => {
    const { totalCount } = useContext(CartContext)

    return (

        <>

            <div className="row cartContainer" >
                {totalCount > 0 ?

                    <Link className='carrito' to='/cart/' >
                        <img src='/assets/baseline_shopping_cart_black_24dp.png' alt="cart" />
                        <p id="cantidadCarrito">{totalCount}</p>
                    </Link>

                    : null}
            </div>
        </>
    )
}



export default CartWidget