import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import dataService from '../../data-service';
import './UserAlbums.css';

function UserAlboms() {

  const [albums, setAlbums] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    dataService.get(`/albums?userId=${id}`)
    .then(({data}) => setAlbums(data))
    .catch((error) => console.log(error))
  }, [id]);

  return (
    <ul className='album-inner'>
      {albums.map(({id, title}) => (
        <li key={id} className='album-item' >
        <NavLink to={`/albums/${id}`} >
          {title}
        </NavLink>
        </li>
      ))}      
    </ul>
  )
}

export default UserAlboms;


