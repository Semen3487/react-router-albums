import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import dataService from '../../data-service';
import './AlbumPhotos.css';

function AlbomFotos() {

  const [photos, setPhotos] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    dataService.get(`/photos?albumId=${id}`)
    .then(({data}) => setPhotos(data))
    .catch((error) => console.log(error))
  }, [id]);

  return (
    <ul className='albums-inner'>
      {photos.map(({title, id, thumbnailUrl}) => (
        <li key={id} className='photos-item'>
          <img src={thumbnailUrl} 
            alt={title}>
          </img>
          <span className='photos-title'>
            {title}
          </span>
        </li>
      ))}
    </ul>
  )
};

export default AlbomFotos;
