import { createContext, useEffect, useState } from 'react';
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalCount, setTotalCount] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    const addToCart = (data, count) => {

        console.log(data)
        if (isInCart(data.id)) {
            setCarrito(carrito.map(prod => {

                return prod.id === data.id ? { ...prod, quantity: prod.quantity + count, precioTotal: (prod.quantity + count) * prod.price, stock: prod.stock - count } : prod

            }));
        } else {

            setCarrito([...carrito, { ...data, quantity: count, precioTotal: data.price * count, stock: data.stock - count }]);
        }

    }
    //estoy intentando mostrar la cantidad de items en el carrito´pero no logro que funcione

    useEffect(() => {
        const counter = carrito.reduce((acc, item) => acc + item.quantity, 0)
        setTotalCount(counter)
    }, [carrito])

    useEffect(() => {
        const montoFinal = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setPrecioTotal(montoFinal)
    }, [carrito])


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
            totalCount,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;