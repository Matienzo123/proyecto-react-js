import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ProductFormUI } from './ProductFormUI';
import { validateProduct } from '../../utils/validateProduct';
import { uploadImage } from '../../services/uploadImage';
import { createProduct } from '../../services/productsService';

export const ProductFormContainer = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: '',
        version: '',
        description: '',
        price: '',
        category: '',
        modo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Modifiamos los estados para el Loading y el Error.
        setLoading(true);
        setErrors(null);

        // Validar que el producto tenga un nombre, una descripción, un precio y una categoría.
        const newErrors = validateProduct({ ...product, file });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            //subir la imagen a Firebase Storage y obtener su URL
            const imageUrl = await uploadImage(file);

            // Crear un nuevo producto con los datos del formulario y la URL de la imagen.
            const productData = {
                ...product,
                price: parseFloat(product.price),
                image: imageUrl
            };
            // Crear el producto en la base de datos y obtener su ID.
            const createdProduct = await createProduct(productData);
            const id = createdProduct?.id;

            // Vaciar el formulario y redirigir al usuario a la página de detalles del producto recién creado.
            setProduct({
                name: '',
                version: '',
                description: '',
                price: '',
                category: '',
                modo: '',
            });
            setFile(null);
            navigate(`/admin/productos/success/${id}`, { replace: true });
        } catch (error) {
            setErrors({ general: error.message || 'Error al crear el producto' });
        } finally {
            setLoading(false);
        }
    }

    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
};

