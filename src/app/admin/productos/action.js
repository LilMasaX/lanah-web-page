"use server"

import { connectDB } from "@/lib/mongodb"
import { Producto } from "@/models/producto"
import { redirect } from "next/navigation"
import cloudinary from "@/lib/cloudinary"
import { readfile } from "fs/promises"

export async function createProducto(formData) {
    await connectDB();

    const nombre = formData.get ("nombre");
    const descripcion = formData.get ("descripcion");
    const precio = parseFloat(formData.get ("precio"));
    const stock = parseInt(formData.get ("stock"));
    const imageFile = formData.get ("imagen");

    let imageUrl = "";

    if (imageFile && imageFile.size > 0) {
        // Subir imagen a Cloudinary
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const result = await cloudinary.uploader.upload_stream({
            resource_type: "image",
            folder  : "productos",
            public_id: `producto_${Date.now()}`,
        }, (error, result) => {
            if (error) {
                console.error("error subiendo la imagen: ", error);
            } else {
                console.log("Imagen subida correctamente:", result.secure_url);
                imageUrl = result.secure_url;
            }
        });

        // ¡IMPORTANTE!
    // Node streams requieren escritura para funcionar:
    result.end(buffer);
  }

  const nuevoProducto = new Producto({
    nombre,
    descripcion,
    precio,
    stock,
    imagen: imageUrl || "",
  });

  await nuevoProducto.save();

  redirect("/admin/productos");
}