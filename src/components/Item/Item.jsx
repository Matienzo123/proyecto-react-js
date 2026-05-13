import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, image, name }) => {
    return (
        <article className="card">
            <img src={image} alt={`Foto de ${name}`} />

            <div className="card-overlay">
                {/* <h3>{name}</h3> */}

                <Link to={`/product/${id}`} className="btn-info">
                    + Info
                </Link>
            </div>
        </article>
    );
};