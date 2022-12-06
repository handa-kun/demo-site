import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav-bar'>
        <div>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div>
          <NavLink to='/friends'>Friends</NavLink>
        </div>
        <div>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div>
          <NavLink to='/settings'>Settings</NavLink>
        </div>
      </nav>
    )
}

export default Nav;