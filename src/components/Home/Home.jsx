import "./Home.css"
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <section className="hero">

            {/* IMAGEN */}
            <img
                src="/img/saga-rd.png"
                alt="Personajes Red Dead"
                className="hero-img"
            />

            {/* OVERLAY */}
            <div className="hero-overlay"></div>

            {/* CONTENIDO */}
            <div className="hero-content">
                <h1>SÚMERGETE EN EL MUNDO DEL LEJANO OESTE</h1>

                <p>
                    Vive una historia de traición, redención y supervivencia en el ocaso del oeste.
                </p>

                <Link to="/juegos" className="btn-hero">
                    Ver juegos
                </Link>
            </div>

        </section>
    )
}