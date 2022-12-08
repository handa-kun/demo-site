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
        <div>
          <NavLink to='/friends'>
            <h3>Friends</h3>
          </NavLink>
          <div className='img_friends'>
            <img src="https://www.uchportal.ru/_si/0/60762899.png" alt="logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImGC3p0DGQPuMv7F5og61Dmaz06WZQQWku_TOwK8rL92NW1q-UJiVovmr3WwHDfbs84M&usqp=CAU" alt="logo" />
            <img src="https://w7.pngwing.com/pngs/798/215/png-transparent-nevsky-prospect-vladimir-mayakovsky-mayakovskaya-saint-petersburg-metro-rapid-transit-lenin-celebrities-electronics-face.png" alt="logo" />
          </div>
        </div>
      </nav>
    )
}

export default Nav;