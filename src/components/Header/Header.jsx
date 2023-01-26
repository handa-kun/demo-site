import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://static.vecteezy.com/system/resources/previews/001/200/107/original/book-png.png' alt='logo' />

            <div className={classes.login_block}>
                {props.isAuth ? props.login :
                    <NavLink to='/login'>Login</NavLink>}
                <button onClick={props.logout}>Logout</button>
            </div>
        </header>
    )
}

export default Header;