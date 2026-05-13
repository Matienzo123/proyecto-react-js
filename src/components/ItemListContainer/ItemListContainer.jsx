import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // JSON LOCAL
    useEffect(() => {
        setLoading(true);

        fetch("/data/products.json")
            .then((respuesta) => respuesta.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log("ERROR: ", error))
            .finally(() => setLoading(false))
    }, []);

    console.log(products);

    if (loading) return <p>CARGANDO...</p>

    return (
        <section className="itemlist-container">
            <div className="itemlist-header">
                <h1>Juegos</h1>
                <p>Nuestro listado de juegos</p>
            </div>

            <div className="itemlist-content">
                <ItemList products={products} />
            </div>
        </section>
    );
};