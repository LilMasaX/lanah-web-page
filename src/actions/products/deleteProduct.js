"use server";
import { connectDB } from "@/lib/mongodb";
import { Producto } from "@/models/producto";
import { revalidatePath } from "next/cache";
import cloudinary from "@/lib/cloudinary"; // Asegúrate de tener esto configurado

export async function deleteProduct(id) {
  try {
    await connectDB();
    
    // 1. Primero obtenemos el producto para sacar la URL de la imagen
    const producto = await Producto.findById(id);
    if (!producto) {
      return { success: false, error: "Producto no encontrado" };
    }

    // 2. Eliminar la imagen de Cloudinary si existe
    if (producto.imagen) {
      try {
        // Extraemos el public_id de la URL de Cloudinary
        const urlParts = producto.imagen.split('/');
        const publicId = urlParts[urlParts.length - 1].split('.')[0];
        const fullPublicId = `productos/${publicId}`;
        
        await cloudinary.uploader.destroy(fullPublicId);
      } catch (error) {
        console.error("Error eliminando imagen de Cloudinary:", error);
        // Puedes decidir si quieres continuar aunque falle la eliminación de la imagen
      }
    }

    // 3. Eliminar el producto de la base de datos
    await Producto.findByIdAndDelete(id);
    
    revalidatePath("/admin/products");
    return { success: true };
  } catch (error) {
    console.error("Error eliminando producto:", error);
    return { success: false, error: error.message };
  }
}