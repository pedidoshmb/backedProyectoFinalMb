import mongoose from "mongoose";

const invimaSchema = new mongoose.Schema({
  registrosanitario: {
    type: String,
    required: true,
  },
  expediente: {
    type: String,
    default: "",
  },
  descripcioncomercial: {
    type: String,
    default: "",
  },
  consecutivocum: {
    type: String,
    default: "",
  },
  estadocum: {
    type: String,
  },
  producto: {
    type: String,
    required: true,
  },
});

const Invima = mongoose.model("Medicamento", invimaSchema);
export default Invima;
