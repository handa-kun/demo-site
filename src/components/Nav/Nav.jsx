import { NavLink } from 'react-router-dom';
import './Nav.css'
//import NavFriends from './NavFriends';

const Nav = (store) => {

  //let friendsElements = state.friends.map(f => <NavFriends name={f.name} />);

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
      <div>
        <NavLink to='/users'>Users</NavLink>
      </div>
      <div>
        <NavLink to='/friends'>
          <h3>Friends</h3>
        </NavLink>
        <div className='online'>
          {/* {friendsElements} */}
        </div>
      </div>
    </nav>
  )
}

export default Nav;