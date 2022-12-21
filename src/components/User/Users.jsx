import classes from '../User/Users.module.css'
import User from '../../images/user.png'

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
                        <img src={u.photos.small != null ? u.photos.small : User} className={classes.img} alt='logo' />
                    </div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollowed</button> :
                            <button onClick={() => props.follow(u.id)}>Followed</button>}
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