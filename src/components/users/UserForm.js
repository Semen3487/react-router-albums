import React, { useState } from 'react';
import './UserForm.css';
import { initFormState } from '../../models/initFormState'
import { useHistory, useParams } from 'react-router-dom';


function UserForm({users}) {

  const {id} = useParams();

  const currentUser = users.find((user) => user.id === parseInt(id));

  
  const [user, setUser] = useState(currentUser ? currentUser : initFormState);

  const history = useHistory();

  function onInputChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onReset = () => { 
    setUser(initFormState)
  };

  const goBack = () => {
    history.push('/users')
  };

  return (
    <form id='userForm' className='form-inner'>
      <div>
        <label htmlFor='userName'>Name</label>
        <input
          id='userName' 
          type='text'
          name='name'
          value={user.name}
          onChange={onInputChange}
          />
      </div>
      
      <fieldset id='contact' form='userForm'>
        <legend>Contact</legend>
        <div className='input-wrapper'>
          <label htmlFor='userEmail'>Email</label>
          <input
            id='userEmail' 
            type='email'
            name='email'
            value={user.email}
            onChange={onInputChange}
            />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userPhone'>Phone</label>
          <input
            id='userPhone' 
            type='tel'
            name='phone'
            value={user.phone}
            onChange={onInputChange}
            />
        </div>
      </fieldset>
      
      <fieldset id='address' form='userForm'>
        <legend>Address</legend>
        <div className='input-wrapper'>
          <label htmlFor='userCity'>City</label>
          <input
            id='userCity' 
            type='text'
            name='city'
            value={user.address.city}
            onChange={onInputChange}
            />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userStreet'>Street</label>
          <input
            id='userStreet' 
            type='text'
            name='street'
            value={user.address.street}
            onChange={onInputChange}
            />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='userZipcode'>Zipcode</label>
          <input
            id='userZipcode' 
            type='text'
            name='zipcode'
            value={user.address.zipcode}
            onChange={onInputChange}
            />
        </div>
      </fieldset>
      <div>
        <button type='submite' className='footer-item'>
          Save
        </button>
        <button type='button' className='footer-item'
                onClick={onReset} >
          Reset
        </button>
        <button type='button'
                className='footer-item' 
                onClick={goBack} >
          Return
        </button>
      </div>
    </form>
  )
}

export default UserForm;
