"use server";

import db from "@/lib/mongodb";
// ? Fonction pour tester la connexion a la base de donnée
export async function testDatabaseConnection() {
  const isConnected = false;
  try {
    const mongoClient = await db.connect();
    // Envoie un ping de test http pour verifier la connexion a la base de donnée en tant qu'admin
    await mongoClient.db("admin").command({ ping: 1 });
    console.log(
      "La réponse du ping a été reçu avec succées. Vous ètes maintenant connectée a MongoDB!")
    return !isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}