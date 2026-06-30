import { Link } from "react-router-dom";
import "./ProductSuccess.css";
import { useNavigate, useParams } from "react-router-dom";

export const ProductSuccess = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <section>
            <div className="div-ok">OK</div>

            <div className="info-carga">
                <div className="carga-producto">
                    <h2>Producto creado con éxito</h2>
                    <p>ID del producto: {id}</p>
                </div>

                <div className="carga-producto">
                    <p>Puede cargar otro haciendo clic en el botón "Agregar Producto"</p>

                    <button
                        onClick={() => navigate('/admin', { replace: true })}
                        className="btn"
                    >
                        Agregar Producto
                    </button>
                </div>

                <div className="carga-producto">
                    <p>Puede volver a la tienda haciendo clic en el botón ¡Volver a la tienda!</p>
                    <button className="btn">
                        <Link className="header-link" to="/">¡Volver a la tienda!</Link>
                    </button>
                </div>

            </div>


        </section>
    );
};