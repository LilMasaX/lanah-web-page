"use server";

import clientPromise from "@/lib/mongodb";

export async function testConnection() {
  try {
    const client = await clientPromise;
    const db = client.db("lanah_db");

    // Listar las colecciones existentes
    const collections = await db.listCollections().toArray();

    console.log("✅ Conectado a MongoDB. Colecciones:", collections);

    return { ok: true, collections };
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    return { ok: false, error: error.message };
  }
}
