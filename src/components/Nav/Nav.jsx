import "./Nav.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
    const { getTotalItems } = useCart();

    const totalItems = getTotalItems();

    return (
        <nav className="nav">

            {/* Checkbox oculto */}
            <input type="checkbox" id="menu-toggle" />

            {/* Botón hamburguesa */}
            <label htmlFor="menu-toggle" className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ul className="nav-list">
                <li>
                    <Link to="/" onClick={() => document.getElementById("menu-toggle").checked = false}>HOME</Link>
                </li>
                <li>
                    <Link to="/juegos" onClick={() => document.getElementById("menu-toggle").checked = false}>JUEGOS</Link>
                </li>
                <li>
                    <Link to="/carrito" onClick={() => document.getElementById("menu-toggle").checked = false}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        {totalItems >= 0 && <span id="contador-carrito">{totalItems}</span>}
                    </Link>
                </li>
            </ul>

        </nav>
    );
};