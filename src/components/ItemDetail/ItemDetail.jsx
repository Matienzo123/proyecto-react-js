import "./ItemDetail.css"
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
    const { addItem } = useCart();

    return (
        <article className="card-detail">

            <div className="detail-img">
                <img src={item.image} alt={`Foto de ${item.name}`} />
            </div>

            <div className="detail-info">
                <div className="detail-top">
                    <h2>{item.name}</h2>
                    <p className="detail-version">{item.version}</p>
                    <p className="detail-description">
                        {item.description}
                    </p>
                </div>

                <div className="detail-bottom">
                    <p className="detail-modo">Modo: {item.modo}</p>
                    <p className="detail-category">Categoría: {item.category}</p>
                    <p className="p-price">Precio: USD {item.price}</p>

                    <button className="btn-buy" onClick={() => addItem(item)}>
                        Agregar al carrito
                    </button>
                </div>
            </div>

        </article>
    );
};