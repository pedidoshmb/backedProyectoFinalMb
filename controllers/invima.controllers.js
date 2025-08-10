import Invima from "../models/invima.model.js";

const hola = async (req, res) => {
  console.log("hola desde controlador");
  return res.status(200).send("Controlador de Invima funcionando");
};

const createProducto = async (req, res) => {
  try {
    console.log("Datos recibidos en backend:", req.body);
    const producto = new Invima(req.body);
    await producto.save();
    console.log("Medicamento guardado:", producto);
    return res.status(201).json({ mensaje: "Medicamento guardado", producto });
  } catch (error) {
    console.error(" Error al crear Medicamento:", error);
    return res.status(500).json({ error: "No se pudo guardar" });
  }
};

const getProductos = async (req, res) => {
  try {
    const productos = await Invima.find();
    return res.status(200).json(productos);
  } catch (error) {
    console.error("Error al obtener Medicamentos:", error);
    return res.status(500).json(error);
  }
};

const editarMedicamento = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica que el cuerpo de la solicitud no esté vacío
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "Datos de actualización no proporcionados" });
    }

    const medicamento = await Invima.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el documento modificado
      runValidators: true, // Ejecuta las validaciones del esquema
    });

    if (!medicamento) {
      return res.status(404).json({ message: "Medicamento no encontrado" });
    }

    res.json({
      message: "Medicamento actualizado correctamente",
      medicamento,
    });
  } catch (error) {
    console.error("Error al editar medicamento:", error);
    res.status(500).json({
      message: "Error al actualizar el medicamento",
      error: error.message,
    });
  }
};

// Ruta para eliminar un medicamento
const eliminarMedicamento = async (req, res) => {
  try {
    await Invima.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Medicamento eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  hola,
  createProducto,
  getProductos,
  editarMedicamento,
  eliminarMedicamento,
};
