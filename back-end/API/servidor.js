
import express from "express";
import cors from "cors";
import {db} from "./connect.js";
import dotenv from "dotenv";

// Caminho manual para o arquivo .env na raiz do back-end
dotenv.config({ path: "../.env" });


const app = express();
const PORT = process.env.PORT;

app.use(cors());


app.get("/", (request, response) => (
    response.send("olá,mundo Não preciso mais ficar reiniciando toda hora o servidor")
));


app.get("/Artists", async(request, response) => (
    response.send( await db.collection('Artists').find({}).toArray())
));

app.get("/songs", async(request, response) => (
    response.send( await db.collection('songs').find({}).toArray())
));

app.listen(PORT, () => (
    console.log(`servidor esta escutando na porta ${PORT}`)));