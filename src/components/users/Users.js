import React from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import UsersList from './UsersList';


function Users() {

  const {url, path} = useRouteMatch();

  return (
    <>
      <nav>
        <NavLink to={`${url}/add`} >Add</NavLink>
      </nav>
      <Switch>
        <Route path={`${path}`}>
          <UsersList></UsersList>
        </Route>
      </Switch>
    </>
    
  )
}

export default Users;
