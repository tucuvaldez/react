import { createContext, useState } from 'react';
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);


    const addToCart = (data, count) => {

        if (isInCart(data.id)) {
            setCarrito(carrito.map(prod => {

                return prod.id === data.id ? { ...prod, quantity: prod.quantity + count, precioTotal: (prod.quantity + count) * prod.precio, stock: prod.stock - count } : prod

            }));
        } else {

            setCarrito([...carrito, { ...data, quantity: count, precioTotal: data.precio * count, stock: data.stock - count }]);
        }

    }
    //estoy intentando mostrar la cantidad de items en el carrito´pero no logro que funcione

    // const updateCart = () => {
    //     let contadorCart = document.querySelector('#cantidadCarrito')
    //     contadorCart.innerHTML = carrito.reduce((acc, item) => acc + item, 0)
    //     console.log(contadorCart.inner)
    // }

    const clearCart = () => setCarrito([]);

    const isInCart = (id) => carrito.find(prod => prod.id === id) ? true : false;

    const removeProduct = (id) => setCarrito(carrito.filter(prod => prod.id !== id));


    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            clearCart,
            isInCart,
            removeProduct,
            // updateCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;