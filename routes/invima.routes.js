import { Router } from "express";
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

export default router;
