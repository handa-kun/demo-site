import classes from '../User/Users.module.css'
import User from '../../images/user.png'
import { NavLink } from 'react-router-dom';


const Users = (props) => {

    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize) / 500);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={classes.main}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.page}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile'} >
                            <img src={u.photos.small != null ? u.photos.small : User} className={classes.img} alt='logo' />
                        </NavLink>
                    </div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingProgress.some(id => id === u.id)} 
                            onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                            <button disabled={props.followingProgress.some(id => id === u.id)} 
                            onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    {/*   <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span> */}
                </span>
            </div>)
        }
    </div>
}

export default Users;