import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import dataService from '../../data-service';
import AlbumList from './AlbumList';
import AlbumPhotos from './AlbumPhotos';

function Albums() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    dataService.get('/albums').then(({data}) => {
      setAlbums(data)
    })
    .catch((error) => console.log(error))
  }, []);

  const {path} = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} >
        <AlbumList albums={albums} />
      </Route>
      <Route path={`${path}`} >
        <AlbumPhotos albums={albums} />
      </Route>
    </Switch>
  )
}

export default Albums;