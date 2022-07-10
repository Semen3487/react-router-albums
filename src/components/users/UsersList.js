import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import dataService from '../../data-service';

function UsersList() {

  const [users, setUsers] = useState([]);

  const {url} = useRouteMatch();

  useEffect(() => {
    dataService.get('/users')
    .then(({data}) => setUsers(data))
    .catch((error) => console.log(error))
  }, []) 

  return (
    <ul className='users-container' >
      {users.map((user) => {
        return(
          <li key={user.id} className='item-container' >
            <Link to={`${url}/${user.id}`} 
                  className='nav-user' 
                  >
                    <p className='user' >
                      {user.name} {user.phone} 
                    </p>
            </Link>
            <Link></Link>
          </li>
        )
      })}
    </ul>
  )
}

export default UsersList;