const IMGBB_API_KEY = "767ed855084183f3dc2a2b229fdc0988";
const ENDPOINT = "https://api.imgbb.com/1/upload";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Error al subir la imagen: " + data.error.message);
    }

    return data.data.url;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};
