import React from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersList from './UsersList';
import './Users.css';
import UserForm from './UserForm';
import UserAlbums from './UserAlbums';
import AlbumPhotos from '../albums/AlbumPhotos';



function Users() {

  const {url, path} = useRouteMatch();

  return (
    <>
      <nav className='users-nav'>
        <NavLink to={`${url}/add`} 
                activeClassName='selected'>
          Add user
        </NavLink>
      </nav>
      <Switch>
        <Route path={`${path}`} exact>
          <UsersList />
        </Route>
        <Route path={`${path}/add/:id`} >
          <UserForm />
        </Route>
        <Route path={`${path}/add/`} >
          <Redirect to={`${path}/add/:id`} >
            <UserForm />
          </Redirect>
        </Route>
        <Route path={`${path}/:id`} >
          <UserAlbums />
        </Route>
        <Route path={`${path}/album/:id`} >
          <AlbumPhotos />
        </Route>
      </Switch>
    </>
    
  )
}

export default Users;
