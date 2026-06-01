import { use } from "react";
import { useCart } from "../../context/CartContext";

export const CartView = () => {
    const { cart } = useCart();
    return (<section className="cart-container">
        <h1>Carrito de compras</h1>


    </section>
    );
};