"use server";
import { Producto } from "@/models/producto";
import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
}

export async function getProductos() {
  await connectDB();
  const productos = await Producto.find().lean();
  // Convierte _id a string
  return productos.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));
}

export async function deleteProducto(id) {
  await connectDB();
  await Producto.findByIdAndDelete(id);
}