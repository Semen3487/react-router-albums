import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import { deleteUserAction, receiveUserAction } from '../../store/actions/usersActions';
import './UsersList.css';


function UsersList({users}) {

  const {url} = useRouteMatch();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receiveUserAction())
  }, [dispatch])

  function toDeleteUser(id) {
    dispatch(deleteUserAction(id));
    console.log(`user ${id} deleted`);
  };

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
            <span id='delete' className='fa fa-trash-o' 
                  type='button' 
                  onClick={() => toDeleteUser(user.id)}>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default UsersList;