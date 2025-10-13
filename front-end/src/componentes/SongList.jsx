import React from 'react'
import SongItem from './SongItem';
import { useState } from 'react';

const SongList = ({songs}) => {
  const [items, setItems] = useState(5);

  

  return (
    
      <div className="song-list"> 
      {songs.filter((currentValue, index) => index < items).map((currentsongObj, index) => ( <SongItem {...currentsongObj} index= {index} key={index}/>))}

     
      <p className='song-list__see-sore' onClick={() => (
        setItems(items + 5)
      )}>Ver mais</p>
      </div>

  )
}

export default SongList