import Invima from "../models/invima.model.js";

const hola = async (req, res) => {
  console.log("hola desde controlador");
  return res.status(200).send("Controlador de Invima funcionando");
};

const createProducto = async (req, res) => {
  try {
    console.log("📩 Datos recibidos en backend:", req.body);
    const producto = new Invima(req.body);
    await producto.save();
    console.log("💾 Producto guardado:", producto);
    return res.status(201).json({ mensaje: "Producto guardado", producto });
  } catch (error) {
    console.error("❌ Error al crear Medicamento:", error);
    return res.status(500).json({ error: "No se pudo guardar" });
  }
};

const getProductos = async (req, res) => {
  try {
    const productos = await Invima.find();
    return res.status(200).json(productos);
  } catch (error) {
    console.error("❌ Error al obtener Medicamentos:", error);
    return res.status(500).json(error);
  }
};

export { hola, createProducto, getProductos };
