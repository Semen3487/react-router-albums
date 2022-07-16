import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import UsersList from './UsersList';
import './Users.css';
import UserForm from './UserForm';
import UserAlbums from './UserAlbums';
import AlbumPhotos from '../albums/AlbumPhotos';
import { receiveAllUsersAction } from '../../store/actions/usersActions';



function Users() {

  const {usersList: {users}} = useSelector(state => state);

  const dispatch = useDispatch();

  const {url, path} = useRouteMatch();

  useEffect(() => {
    dispatch(receiveAllUsersAction())
  }, [dispatch]) 

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
          <UsersList users={users} 
                      />
        </Route>
        <Route path={`${path}/add/:id`} >
          <UserForm users={users}
                    // formState={formState}
                    // key={formState.id} 
                    />
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
