import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
// import dataService from '../../data-service';
import './UsersList.css';


function UsersList({users}) {

  // const [users, setUsers] = useState([]);

  const {url} = useRouteMatch();

  // useEffect(() => {
  //   dataService.get('/users')
  //   .then(({data}) => setUsers(data))
  //   .catch((error) => console.log(error))
  // }, []) 

  return (
    <ul className='users-inner' >
      {users.map((user) => {
        return(
          <li key={user.id} className='users-item' >
            <Link to={`${url}/${user.id}`} 
                  className='nav-user' 
                  >
              <span className='user' >
                {user.name} {user.phone} 
              </span>
            </Link>
            <Link to={`${url}/add/${user.id}`} >
              <span id='edit' className='fa fa-pencil' >
              </span>
            </Link>
            <span id='delete' className='fa fa-trash-o' >
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default UsersList;