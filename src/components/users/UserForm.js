import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';

import { 
  createUserAction, 
  updateUserAction 
} from '../../store/actions/usersActions';
import './UserForm.css';
import { initForm } from '../../models/initFormState';



function UserForm({users}) {

  const {id} = useParams();

  const currentUser = users.find((user) => user.id === parseInt(id));

  const history = useHistory();

  const dispatch = useDispatch();

  // const onReset = () => { 
  //   setUser(initFormState)
  // };

  const goBackToUser = () => {
    history.push('/users')
  };

  const onFormikSubmit = (values, actions) => {
    !values.id
      ? dispatch(createUserAction({...values, id: Date.now()}))
      : dispatch(updateUserAction(values));
      goBackToUser();
  };

  const renderForm = ({values}) => {
    return (
      <Form id='userForm' 
            className='form-inner'>
        <div>
          <label htmlFor='name'>Name</label>
          <Field name='name' />
          {/* <input 
            type='text'
            name='name'
            value={values.name}
            /> */}
        </div>
        <fieldset id='contact' form='userForm'>
          <legend>Contact</legend>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email</label>
            <Field name='email' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='phone'>Phone</label>
            <Field name='phone' />
          </div>
        </fieldset>
        <fieldset id='address' form='userForm'>
          <legend>Address</legend>
          <div className='input-wrapper'>
            <label htmlFor='address.city'>City</label>
            <Field name='address.city' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='address.street'>Street</label>
            <Field name='address.street' />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='address.zipcode'>Zipcode</label>
            <Field name='address.zipcode' />
          </div>
        </fieldset>
        <div>
          <button type='submite' className='footer-item'>
            Save
          </button>
          <button type='button' className='footer-item'
                  // onClick={onReset} 
                  >
            Reset
          </button>
          <button type='button'
                  className='footer-item' 
                  onClick={goBackToUser} >
            Return
          </button>
        </div>
      </Form>
    )
  }

  return (
    <Formik initialValues={currentUser ? currentUser : initForm}
            onSubmit={onFormikSubmit}
      >
      {renderForm}
    </Formik>
    
  )
}

export default UserForm;
