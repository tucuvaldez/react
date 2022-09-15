import React from 'react'
import { Link } from 'react-router-dom'
// import cart from '/assets/baseline_shopping_cart_black_24dp.png'

const CartWidget = () => {
    return (
        <>
            <Link to='/cart'><img src='/assets/baseline_shopping_cart_black_24dp.png' alt="cart" /></Link>
        </>
    )
}

export default CartWidget