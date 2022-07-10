import { BrowserRouter as Router, NavLink, Redirect, Route,  Switch } from 'react-router-dom';
import './App.css';

import Albums from './components/albums/Albums';
import Users from './components/users/Users';




function App() {
  return (
    <div className='container'>
      <div className='content'>
        <Router>
          <div className='header'>
            <ul className='header-inner'>
              <li className='header-item'>
                <NavLink to='/albums'>Albums</NavLink>
              </li>
              <li className='header-item'>
                <NavLink to='/users' activeClassName='selected'> Users</NavLink>
              </li>
              <li className='header-item'>
                <NavLink to='/'>Home</NavLink>
              </li>
            </ul>
          </div>
          <div className='button-add'></div>
          <Switch>
            <Route path='/albums'>
              <Albums />
            </Route>
            <Route path='/' 
                  exact > 
              <div className='home'></div>
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='*' 
                  //  exact 
                  > 
              <Redirect to='/users' ></Redirect>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;

