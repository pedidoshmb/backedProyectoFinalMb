const fetchInvima = async (expediente) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3005/api/invima/${expediente}`
    );
    if (response.status === 404) {
      return null; // Medicamento no encontrado
    }
    let producto = await response.json();
    return producto;
  } catch (error) {
    console.error("Error al obtener Medicamento:", error);
    return error;
  }
};
export default fetchInvima;
