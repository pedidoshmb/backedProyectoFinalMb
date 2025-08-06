import invimaModel from "../models/invima.model.js";
import fetchInvima from "../services/fetchInvima.js";

const hola = async (req, res) => {
  console.log("hola desde controlador");
  return res.status(200).send("Controlador de Invima funcionando");
};
// Función para crear un nuevo Medicamento
const createProducto = async (req, res) => {
  try {
    // Validar que se envíe un ID de Pokémon
    const toCreate = fetchInvima(req.body.Invima_Expediente);
    if (toCreate == null) {
      return res.status(404).send("Medicamento ID no encontrado");
    }

    const producto = new Producto(req.body);
    await producto.save();
    return res.status(201).json(producto);
  } catch (error) {
    console.error("Error al crear Medicamento:", error);
    return res.status(error.status || 500).json(error);
  }
};
// Nueva función para obtener todos los Medicamentos
const getProductos = async (req, res) => {
  try {
    const productos = await productosModel.find();
    return res.status(200).json(producto);
  } catch (error) {
    console.error("Error al obtener Medicamento:", error);
    return res.status(error.status || 500).json(error);
  }
};

// Exportar las funciones del controlador
export { hola, createProducto, getProductos };
