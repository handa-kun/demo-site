import classes from '../User/Users.module.css'
import Photo from '../../images/user.png'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingProgress, unfollow, follow }) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile'} >
                    <img src={user.photos.small != null ? user.photos.small : Photo} className={classes.img} alt='logo' />
                </NavLink>
            </div>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <div>
                {user.followed ?
                    <button disabled={followingProgress.some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>Unfollow</button> :
                    <button disabled={followingProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}>Follow</button>}
            </div>
        </span>
    </div>
};

export default User;