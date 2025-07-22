import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Falta MONGODB_URI en las variables de entorno");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, dbName: null };
}

export async function connectDB(dbName = "dblanah") {
  if (cached.conn && cached.dbName === dbName) {
    return cached.conn;
  }

  if (!cached.promise || cached.dbName !== dbName) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      dbName,
    }).then((mongoose) => mongoose);
    cached.dbName = dbName;
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
