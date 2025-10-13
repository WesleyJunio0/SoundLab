import {MongoClient} from "mongodb"
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const url = process.env.DB_URL;

const Client = new MongoClient(url);

export const db = Client.db("sportifyR");
console.log(db);

