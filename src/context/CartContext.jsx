import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ------------------------------------------------------------ */
/*      CREAR CONTEXTO                                          */
/* ------------------------------------------------------------ */
const CartContext = createContext();

/* ------------------------------------------------------------ */
/*      CUSTOM HOOK PARA USAR EL CONTEXTO                       */
/* ------------------------------------------------------------ */
export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart debe ser utilizado dentro de un CartProvider");
    }

    return context;
};

/* ------------------------------------------------------------ */
/*      PROVIDER (PROVEEDOR) DEL CONTEXTO                       */
/* ------------------------------------------------------------ */
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // Evaluar si el item ya se encuentra en el carrito = Retorna un booleano
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    }

    /* ------------------------------------------------------------ */
    /*      FUNCIONES DEL CARRITO                                   */
    /* ------------------------------------------------------------ */

    // Agregar un item al carrito
    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El JUEGO ya se encuentra en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert("El JUEGO se ha agregado al carrito");
    }

    // Eliminar un item del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter((element) => element.id !== id);

        setCart(updatedCart);
        alert("El JUEGO ha sido eliminado del carrito");
    }

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    }

    // Total de items en el carrito 
    const getTotalItems = () => {
        return cart.length;
    }

    // Total a pagar
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    }

    // Confirmacion compora - Checkout
    const checkout = () => {
        if (confirm("¿Desea finalizar su compra?")) {
            clearCart();
            alert("Gracias por su compra");
            navigate("/");
        } else {
            alert("Compra cancelada");
        }
    }



    const values = { addItem, removeItem, clearCart, getTotalItems, getCartTotal, checkout };
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}