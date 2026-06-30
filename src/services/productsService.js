import {
  collection,
  addDoc,
  getDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

//Todas las funcuiones van a utilizar esta colección.
//La hacemos global para no repetirla en cada función.
//Creamos una referencia a la colección de productos.
const productsRef = collection(db, "products");

//Función para traer los productos desde la colección de productos de Firebase.
//Recibe un array de productos y los carga en la colección.
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return {
        //El id del documento se guarda en una propiedad llamada id, que esta por fuera de los datos del documento.
        id: doc.id,
        //El resto de los datos del documento se guardan en una propiedad llamada data, que esta por dentro de los datos del documento.
        ...doc.data(),
      };
    });

    return productsFormat;
  } catch (err) {
    console.error("Error al traer productos:", error);
    return [];
  }
};

// Función para traer un producto por id desde la colección de productos de Firebase.
// Recibe el id del producto y devuelve el producto con ese id.
export const getProductById = async (id) => {
  try {
    // Creamos una referencia al documento del producto con el id recibido.
    const productRef = doc(db, "products", id);

    // Traemos el documento del producto.
    const snapshot = await getDoc(productRef);

    // Verificamos si el documento existe.
    if (snapshot.exists()) {
      const product = {
        // El id del documento se guarda en una propiedad llamada id, que esta por fuera de los datos del documento.
        id: snapshot.id,
        // El resto de los datos del documento se guardan en una propiedad llamada data, que esta por dentro de los datos del documento.
        ...snapshot.data(),
      };
      console.log("Producto encontrado: ", product);
      return product;
    } else {
      // Si el documento no existe, devolvemos null.
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por id:", error);
    return null;
  }
};

// Función para traer productos por categoría desde la colección de productos de Firebase.
// Recibe el nombre de la categoría y devuelve un array con los productos de esa categoría.
export const getProductsByCategory = async (category) => {
  try {
    let queryRef;

    if (category) {
      // Si se recibe una categoría, filtramos los productos por esa categoría.
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      // Si no se recibe una categoría, traemos todos los productos.
      queryRef = productsRef;
    }

    // Traemos los documentos que cumplen con la consulta.
    const snapshot = await getDocs(queryRef);

    // Formateamos los productos para que tengan el id por fuera de los datos del documento.
    const productsFormat = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos por categoría:", error);
    return [];
  }
};

// ALTA DE PRODUCTO
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return { id: docRef.id, ...productData };
  } catch (error) {
    console.error("Error al crear producto:", error);
    return null;
  }
};
