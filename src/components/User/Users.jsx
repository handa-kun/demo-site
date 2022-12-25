import classes from '../User/Users.module.css'
import User from '../../images/user.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


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
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '7225ae20-9fc7-4ae1-8bff-83d6d08c471a'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                            }
                            }>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '7225ae20-9fc7-4ae1-8bff-83d6d08c471a'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    });
                                }}>Follow</button>}
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