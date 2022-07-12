import React, { useState } from 'react';
import './UserForm.css';
import { initFormState } from '../../models/initFormState'


function UserForm() {

  const [user, setUser] = useState(initFormState)

  return (
    <form id='userForm' className='form-inner'>
      <div>
        <label htmlFor='userName'>Name</label>
        <input
          id='userName' 
          type='text'
          name='name'
          value={user.name}
          />
      </div>
      
      <fieldset id='contact' form='userForm' 
                className='contact-inner'>
        <legend>Contact</legend>
        <div>
          <label htmlFor='userEmail'>Email</label>
          <input
            id='userEmail' 
            type='email'
            name='email'
            value={user.email}
            />
        </div>
        <div>
          <label htmlFor='userPhone'>Phone</label>
          <input
            id='userPhone' 
            type='tel'
            name='phone'
            value={user.phone}
            />
        </div>
      </fieldset>
      
      <fieldset id='address' form='userForm' 
                className='contact-inner'>
        <legend>Address</legend>
        <div>
          <label htmlFor='userCity'>City</label>
          <input
            id='userCity' 
            type='text'
            name='city'
            value={user.city}
            />
        </div>
        <div>
          <label htmlFor='userStreet'>Street</label>
          <input
            id='userStreet' 
            type='text'
            name='street'
            value={user.street}
            />
        </div>
        <div>
          <label htmlFor='userZipcode'>Zipcode</label>
          <input
            id='userZipcode' 
            type='text'
            name='zipcode'
            value={user.zipcode}
            />
        </div>
      </fieldset>
      <div className='form-buttons'>
        <button type='submite'>Save</button>
        <button>Reset</button>
        <button>Return</button>
      </div>
    </form>
  )
}

export default UserForm;
