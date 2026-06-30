import { Link } from "react-router-dom";
import "./Dashboard.css"
import { useAuth } from "../../../context/AuthContext"

export const Dashboard = () => {
    const { logout } = useAuth();

    return (
        <div className="dashboard">

            <div>

                <header className="dashboard-header">

                    <h2>Admin</h2>

                    <div className="header-actions">
                        <button className="btn"><Link className="header-link" to="/">¡Volver a la tienda!</Link></button>
                        <button className="btn" onClick={logout}>Cerrar Sesión</button>
                    </div>

                </header >

                <section className="dashboard-actions">
                    <h3>Acciones Rápidas</h3>

                    <div className="actions-grid">

                        <Link to="/admin/products/new" className="action-card">
                            Cargar
                        </Link>
                        <Link to="#" className="action-card disabled">
                            Modificar
                        </Link>

                        <Link to="#" className="action-card disabled">
                            Eliminar
                        </Link>

                    </div>
                </section>

                <section className="dashboard-help">
                    <h3>Ayuda</h3>
                    <p>Desde este panel podés gestionar los juegos de la tienda!!!</p>
                </section>

            </div>

        </div>

    );
};