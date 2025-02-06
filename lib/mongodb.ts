import { MongoClient } from "mongodb";
// ! verification de la variable d'environnement ->  MONGODB_URI
if (!process.env.MONGODB_URI) {
  throw new Error('Invalide ou environnement de variable manquante : "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const db: MongoClient = new MongoClient(uri);
export default db;