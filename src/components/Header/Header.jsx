import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({ logout, ...props }) => {
    return (
        <header className={classes.header}>
            <img src='https://static.vecteezy.com/system/resources/previews/001/200/107/original/book-png.png' alt='logo' />

            <div className={classes.login_block}>
                {props.isAuth
                    ? <div className={classes.div_button}>{props.login}<button onClick={logout}>Log out</button></div>
                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;