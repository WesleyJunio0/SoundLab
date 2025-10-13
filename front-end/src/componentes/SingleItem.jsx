import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SingleItem = ({_id,name, image, artist, banner, idpath}) => {
  return (

      <Link to={`${idpath}/${_id}`} className="single-item">
                       <div className='single-item__div-image-button'>
                           <div className="single-item__div-image">

                             <img className='single-item__image'  src={image} alt={`imagem do cantor ${name}`} />
                           </div>
                     
                             <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
                     
                           </div>
                         <div className='single-item__text'>
                          <div className='single-item__2line'>
                           <p className='single-item__text-title'>{name}</p>
                           </div>
                           <p className='single-item__type'>{artist ? artist : "Artista"}</p>
                       </div>
                   
      </Link>
     
                 
  )
}

export default SingleItem