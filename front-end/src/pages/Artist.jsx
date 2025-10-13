import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link , useParams} from 'react-router-dom';
import SongList from '../componentes/SongList';
import {  fetchArtists } from "../database_banco_de_dados/Artists";//Artists
import { fetchSongs } from '../database_banco_de_dados/songs'; //songs
import { useState, useEffect } from 'react';

const Artist = () => {

  const { id } = useParams();

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
    }, [id]);
  
    if (loading) return <p>Carregando...</p>;



  const artistaObj = artists.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];

  const songsObj = songs.filter(
    (currentsongObj) => currentsongObj.artist === artistaObj.name
  );

  const randomIndex = Math.floor(Math.random() * (songsObj.length - 1));

  const randomIdfromArtist =  songsObj[randomIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${artistaObj.banner})`
        }}
      >
        <h2 className='artist__title'>{artistaObj.name}</h2>


      </div>

      <div className="artist__body">
        <h2>Populares</h2>


      <SongList songs={songsObj}/>

      </div>
      <Link to={`/song/${randomIdfromArtist}`}>
        <FontAwesomeIcon className="single-item--artist  single-item__icon " icon={faCirclePlay} />
      </Link>
    </div>
  );
}

export default Artist