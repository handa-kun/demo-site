import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Pencil from '../../images/pencil.jpg'

const Header = ({ logout, ...props }) => {
    return (
        <header className={classes.header}>
            <div>
                <img src={Pencil} alt='logo' />
            </div>
            <div className={classes.login_block}>
                {props.isAuth
                    ? <div className={classes.div_button}>
                        {props.login}
                        <button onClick={logout}>Log out</button>
                    </div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;