import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { getAllAlbumsAction } from '../../store/actions/albumsActions';
import AlbumList from './AlbumList';
import AlbumPhotos from './AlbumPhotos';

function Albums() {

  const {albumsList: {albums}} = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbumsAction())
  }, [dispatch]) 


  const {path} = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}`} exact>
        <AlbumList albums={albums} />
      </Route>
      <Route path={`${path}/:id`} >
        <AlbumPhotos />
      </Route>
    </Switch>
  )
}

export default Albums;