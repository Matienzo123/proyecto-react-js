import "./ProductFormUI.css"

export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
}) => {
    return (
        <section className="section">

            <form onSubmit={onSubmit}>

                <div className="carga-container">

                    <h2>Agregar nuevo producto</h2>

                    {errors?.general && <p>{errors.general}</p>}

                    <div className="items-container">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={onChange}
                            required
                        />
                        {errors?.name && <p>{errors.name}</p>}
                    </div>

                    <div className="items-container">
                        <label>Versión:</label>
                        <input
                            type="text"
                            name="version"
                            value={product.version}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="items-container">
                        <label>Descripción:</label>
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={onChange}
                            required
                        />
                        {errors?.description && <p>{errors.description}</p>}
                    </div>

                    <div className="items-container">
                        <label>Precio:</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={onChange}
                            required
                        />
                        {errors?.price && <p>{errors.price}</p>}
                    </div>

                    <div className="items-container">
                        <label>Categoría:</label>
                        <select
                            name="category"
                            value={product.category}
                            onChange={onChange}
                            required
                        >
                            <option value="">Seleccione una categoría</option>
                            <option value="Full Game">Full Game</option>
                            <option value="Extension">Extension</option>
                            <option value="Otro">Otro...</option>
                        </select>
                    </div>

                    <div className="items-container">
                        <label>Modo de juego:</label>
                        <select
                            name="modo"
                            value={product.modo}
                            onChange={onChange}
                            required
                        >
                            <option value="">Seleccione un modo de juego</option>
                            <option value="History">History</option>
                            <option value="Online">Online</option>
                            <option value="History & Online">History & Online</option>
                            <option value="Otro">Otro...</option>
                        </select>
                    </div>

                    <div className="items-container">
                        <label>Imagen:</label>
                        <input type="file" accept="image/*" onChange={onFileChange} />
                        {errors?.file && <p>{errors.file}</p>}
                    </div>
                    <div className="div-button">
                        <button className="btn" type="submit" disabled={loading}>
                            {loading ? "Guardando..." : "Guardar producto"}
                        </button>
                    </div>

                </div>

            </form>

        </section>
    );
};