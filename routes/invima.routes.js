import { Router } from "express";
import Medicamento from "../models/invima.model.js";
import {
  hola,
  createProducto,
  getProductos,
} from "../controllers/invima.controllers.js";

const router = Router();

// Ruta de prueba para verificar que el controlador funciona
router.get("/hola", hola);
// Definición de las rutas
router.post("/create", createProducto);
router.get("/", getProductos); // Nueva ruta GET para obtener todos los medicamentos

router.post("/guardar", createProducto);

export default router;
