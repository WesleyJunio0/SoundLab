import React from 'react';
import ItemList from './ItemList';
import {  fetchArtists } from "../database_banco_de_dados/Artists";//Artists,
import {fetchSongs } from '../database_banco_de_dados/songs'; // songs,
import { useState, useEffect } from 'react';


const Main = ({type}) => {

  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [artistsData, songsData] = await Promise.all([
          fetchArtists(),
          fetchSongs(),
        ]);
        setArtists(artistsData);
        setSongs(songsData);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Carregando...</p>;


  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
      <ItemList title="Artistas populares" items={7} itemsArray={artists} path='/artists' idpath='artist'/>) : (<></>)
       }

      {type === "songs" || type === undefined ? (
      <ItemList title="Músicas populares" items={10} itemsArray={songs} path='/songs' idpath='song'/>) : (<></>)
    }

    </div>
  )
}

export default Main;