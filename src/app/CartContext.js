import { createContext, useEffect, useState } from 'react';
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [totalCount, setTotalCount] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    //FUNCION PARA AGREGAR ITEMS AL CARRITO
    const addToCart = (data, count) => {

        if (isInCart(data.id)) {
            setCarrito(carrito.map(prod => {
                return prod.id === data.id ? { ...prod, quantity: prod.quantity + count, precioTotal: (prod.quantity + count) * prod.price, stock: prod.stock - count } : prod
            }));
        } else {
            setCarrito([...carrito, { ...data, quantity: count, precioTotal: data.price * count, stock: data.stock - count }]);
        }

    }

    // ACTUALIZO CANTIDAD DE ITEMS Y PRECIO TOTAL EN EL CARRITO, CADA VEZ QUE EL CARRITO SE MODIFICA

    useEffect(() => {
        const counter = carrito.reduce((acc, item) => acc + item.quantity, 0)
        setTotalCount(counter)
        const montoFinal = carrito.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setPrecioTotal(montoFinal)
    }, [carrito])


    //FUNCION PARA LIMPIAR CARRITO
    const clearCart = () => setCarrito([]);

    //FUNCION PARA CORROBORAR ITEM EN CARRITO Y NO REPETIR
    const isInCart = (id) => carrito.find(prod => prod.id === id) ? true : false;

    //FUNCION PARA ELIMINAR UN ITEM ESPECIFICO DEL CARRITO
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