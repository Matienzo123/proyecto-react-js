import "./Cart.css";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartView = () => {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <header className="cart-header">
                <p className="cart-kicker">Resumen de compra</p>
                <h1>Carrito de compras</h1>
            </header>

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <h2>Tu carrito está vacío</h2>
                    <p>Agregá juegos desde el catálogo para verlos acá.</p>
                </div>
            ) : (
                <div className="cart-layout">
                    <div className="cart-main">
                        <CartList items={cart} />
                    </div>
                    <CartSummary />
                </div>
            )}
        </section>
    );
};