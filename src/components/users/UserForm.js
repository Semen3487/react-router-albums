import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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

  
  const goBackToUser = () => {
    history.push('/users')
  };

  const onFormikSubmit = (values, actions) => {
    !values.id
      ? dispatch(createUserAction({...values, id: Date.now() }))
      : dispatch(updateUserAction(values));
      actions.resetForm(initForm);
      goBackToUser();
      console.log(values)
  };

  const schemaField = Yup.object().shape({
    name: Yup.string()
          .required('This field is required')
          .min(2, 'To less letters')
          .max(8, 'To many letters'),
    email: Yup.string()
          .required('This field is required')
          // .email('No valid email address')
          // .matches(/^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi, 'No valid email address by regexp'),
    // address: Yup.object().shape({
    //   city: Yup.string().required('This field is required'),
    // })
  })

  const renderForm = (props) => {
    // console.log(props)
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
        <ErrorMessage name='name' />
        <fieldset id='contact' form='userForm'>
          <legend>Contact</legend>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email</label>
            <Field name='email' />
          </div>
          <ErrorMessage name='email' /> 
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
          <ErrorMessage name='address.city' />
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
          <button type='submite' className='footer-item' 
                  disabled={!props.isValid}
                  >
            Save
          </button>
          <button type='reset' className='footer-item'>
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
            validationSchema={schemaField}
      >
      {renderForm}
    </Formik>
     
  )
}

export default UserForm;
