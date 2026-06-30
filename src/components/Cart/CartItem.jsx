import { useCart } from "../../context/CartContext";

export const CartItem = ({ item }) => {
	const { removeItem } = useCart();

	return (
		<article className="cart-item">
			<div className="cart-item-image">
				<img src={item.image} alt={`Foto de ${item.name}`} />
			</div>
			<div className="cart-item-info">
				<h2>{item.name}</h2>
				<p>{item.version}</p>
				<p className="cart-item-price">Precio: <strong>USD {item.price}</strong></p>
			</div>
			<div className="cart-item-actions">
				<button type="button" onClick={() => removeItem(item.id)}>
					Quitar
				</button>
			</div>
		</article>
	);
};