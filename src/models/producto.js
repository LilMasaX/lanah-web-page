import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    stock: Number,
    imagen: String, //URL de la imagen en cloudinary

})

export const Producto = 
mongoose.models.Producto || mongoose.model("Producto", productoSchema);