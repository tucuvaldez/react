
import { useContext } from 'react'
import { CartContext } from '../app/CartContext'
import CartDetail from '../pages/CartDetail';



export const Cart = () => {
    const { carrito } = useContext(CartContext)

    return carrito.map(prod => <div className="col-12   col-md-4" key={prod.id}><CartDetail item={prod} /></div>)

}
