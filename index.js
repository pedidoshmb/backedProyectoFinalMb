import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import invimaRouter from "./routes/invima.routes.js";

console.log("MONGO_DB_URI:", process.env.MONGO_DB_URI);

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3006;
app.set("port", PORT);

app.use(express.json());
app.use("/api/invima", invimaRouter);

//conectamos la BD
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Conectado a la base de datos"))
  .catch((error) =>
    console.error("Error al conectar a la base de datos:", error)
  );

app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});
