import { NavLink } from 'react-router-dom';
import './Nav.css'
//import NavFriends from './NavFriends';

const Nav = (store) => {

  return (
    <nav className='nav-bar'>
      <div>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs'>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/users'>Users</NavLink>
      </div>
    </nav>
  )
}

export default Nav;