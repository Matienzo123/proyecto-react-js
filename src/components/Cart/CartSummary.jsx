import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
	const { getTotalItems, getCartTotal, clearCart, checkout } = useCart();

	return (
		<aside className="cart-summary">
			<h2>Resumen</h2>
			<p className="summary-products"><span>Productos</span> <strong>{getTotalItems()}</strong></p>
			<p className="summary-total"><span>Total</span> <strong>USD {getCartTotal().toFixed(2)}</strong></p>
			<div className="cart-summary-actions">
				<button type="button" onClick={checkout}>
					Finalizar compra
				</button>
				<button type="button" onClick={clearCart}>
					Vaciar carrito
				</button>
			</div>
		</aside>
	);
};