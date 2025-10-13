import axios from "axios";

const url = "http://localhost:3000";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

//const reponseArtist = await axios.get(`${url}/Artists`);
//const reponsesong = await axios.get(`${url}/songs`);

export async function fetchArtists() {
  const response = await api.get("/Artists");
  return response.data;
}

export async function fetchSongs() {
  const response = await api.get("/songs");
  return response.data;
}

//export const Artists = reponseArtist.data;
//export const songs = reponsesong.data;
//console.log(reponseArtist.data)

