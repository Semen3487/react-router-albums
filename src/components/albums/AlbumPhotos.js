import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAlbumPhotosAction } from '../../store/actions/photosActions';
import './AlbumPhotos.css';

function AlbomFotos() {

  const {photosList: {photos}} = useSelector(state => state);

  const {id} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumPhotosAction())
  }, [dispatch, id])

  // useEffect(() => {
  //   dataService.get(`/photos?albumId=${id}`)
  //   .then(({data}) => setPhotos(data))
  //   .catch((error) => console.log(error))
  // }, [id]);

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
