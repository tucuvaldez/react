import React from 'react'
import cart from '../assets/baseline_shopping_cart_black_24dp.png'

const CartWidget = () => {
    return (
        <>
            <button><img src={cart} alt="cart" /></button>
        </>
    )
}

export default CartWidget