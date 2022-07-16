import React from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Route,  Switch } from 'react-router-dom';

import './App.css';
import Albums from './components/albums/Albums';
import Home from './components/startPage/Home';
import Users from './components/users/Users';




function App() {
  return (
    <Router>
      <div className='container'>
        <div className='content'>
          <div className='header'>
            <ul className='header-inner'>
              <li className='header-item'>
                <NavLink to='/albums' activeClassName='selected'>
                  Albums
                </NavLink>
              </li>
              <li className='header-item'>
                <NavLink to='/users'activeClassName='selected'>  
                  Users
                </NavLink>
              </li>
              <li className='header-item'>
                <NavLink to='/' 
                        //  activeClassName='selected'
                         >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path='/albums'>
              <Albums />
            </Route>
            {/* <Route path='/' 
                  exact > 
              <div className='home'></div>
            </Route> */}
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='*' > 
              <Redirect to='/users' ></Redirect>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;

