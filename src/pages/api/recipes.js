// recipes.js
// remember to set the environment variable eg. MONGODB_URI="mongodb+srv://MONGODB ATLAS STRING HERE"
// create it in .env.local

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = await client.db("recipe-database");
  switch (req.method) {
    case "POST":
      console.log(req.body);
      await db.collection("recipes").insertOne(req.body);
      res.json({status: 200});
      break;
    case "GET":
      const recipes = await db.collection("recipes").find({}).toArray();
      res.json(recipes);
      break;
  }
}
