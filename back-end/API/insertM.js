import { songs} from "../../front-end/src/database_banco_de_dados/songs.js";
import { Artists} from "../../front-end/src/database_banco_de_dados/Artists.js";
import { db } from "./connect.js";

//Removendo o id que existia nos objetos para evitar conflito com o _id do MongoDB

const newArtist = Artists.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id;
    return newArtistObj;
});

const newsong = songs.map((currentsongObj) => {
    const newsongObj = { ...currentsongObj };
    delete newsongObj.id;
    return newsongObj;
});

//Inserindo os dados no banco de dados mongodb

try {
const responseSong = await db.collection("songs").insertMany(newsong)

const responseArtist = await db.collection("Artists").insertMany(newArtist);
 console.log(responseArtist);

 console.log(responseSong);


} catch(error) {
    console.log(error);

}


