import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './AlbumList.css';

function AlbumList({albums}) {

  const {url} = useRouteMatch();

  return (
    <ul className='albums-inner' >
      {albums.map(({id, title}) => (
        <li key={id} className='albums-item'>
          <Link to={`${url}/${id}`} >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default AlbumList;
