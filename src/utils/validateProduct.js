export const validateProduct = (product) => {
  const errors = {};

  if (!product.name || product.name.trim() === "") {
    errors.name = "El nombre del producto es requerido.";
  }

  if (!product.price || isNaN(product.price) || Number(product.price) <= 0) {
    errors.price = "El precio del producto debe ser un número positivo.";
  }

  if (!product.description.trim()) {
    errors.description = "La descripción es obligatoria";
  }

  if (!product.category || product.category.trim() === "") {
    errors.category = "La categoría del producto es requerida.";
  }

  if (!product.file) {
    errors.file = "Debes seleccionar una imagen";
  }

  return errors;
};
