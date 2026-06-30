import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () => {
    const { id } = useParams();

    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        // FIREBASE
        getProductById(id)
            .then((data) => {
                if (data) {
                    setItemDetail(data);
                }
            })
            .catch((error) => console.log("ERROR: ", error))
            .finally(() => setLoading(false))

        // JSON LOCAL
        // fetch("/data/products.json")
        //     .then((respuesta) => respuesta.json())
        //     .then((data) => {
        //         const item = data.find((element) => String(element.id) === id)
        //         if (item) {
        //             setItemDetail(item)
        //             return
        //         }

        //         throw new Error("Elemto no encontrado.")
        //     })
        //     .catch((error) => console.log("ERROR: ", error))
        //     .finally(() => setLoading(false))
    }, []);

    if (loading) return <p>CARGANDO...</p>;
    if (!itemDetail) return <p>Producto no encontrado!!!</p>;

    return (
        <section>
            <h1>DETALLE DE PRODUCTO</h1>
            <div className="products-container">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
    )
}