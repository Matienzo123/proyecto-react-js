import "./ItemList.css"
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
    return (
        <div className="contenedor-productos">
            {products.length ? (
                products.map((product) => (
                    <Item
                        key={product.id}
                        {...product}
                    />
                ))
            ) : (
                <p>No hay productos</p>
            )}
        </div>
    );
};


// export const ItemList = ({ products }) => {
//     if (!products.length) {
//         return <p>No hay productos</p>
//     }

//     return (
//         <div className="contenedor-productos">
//             {products.map((product) => (
//                 <Item key={product.id} {...product} />
//             ))}
//         </div>
//     );
// };
