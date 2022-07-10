import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import dataService from '../../data-service';

function AlbomFotos() {

  const [photos, setPhotos] = useState();

  // const {id} = useParams()

  // useEffect(() => {
  //   dataService.get(`/photos?albumid=${id}`)
  //   .then(({data}) => setPhotos(data))
  //   .catch(error) = console.log(error)
  // }, [id])

  return (
    <div>
      {photos.map(({title, id, thumbnailUrl}) => (
        <p key={id} >
          {title}
          <img src={thumbnailUrl} 
          alt={title} 
          width='150px'
          ></img>
        </p>
      ))}
    </div>
  )
}

export default AlbomFotos;
