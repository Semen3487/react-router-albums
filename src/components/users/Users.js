import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersList from './UsersList';
import './Users.css';
import UserForm from './UserForm';
import UserAlbums from './UserAlbums';
import AlbumPhotos from '../albums/AlbumPhotos';
import dataService from '../../data-service';



function Users() {

  const [users, setUsers] = useState([]);

  const {url, path} = useRouteMatch();

  useEffect(() => {
    dataService.get('/users')
    .then(({data}) => setUsers(data))
    .catch((error) => console.log(error))
  }, []) 

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
          <UsersList users={users} />
        </Route>
        <Route path={`${path}/add/:id`} >
          <UserForm users={users}/>
        </Route>
        <Route path={`${path}/add/`} >
          <Redirect to={`${path}/add/:id`} >
            <UserForm  />
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
