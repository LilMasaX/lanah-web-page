import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGO_URI) {
  throw new Error("Por favor define la variable de entorno MONGO_URI en .env.local");
}

if (process.env.NODE_ENV === "development") {
  // En desarrollo, usa variable global para no crear varias conexiones al recargar
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En producción, crea nueva conexión
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
