import classes from '../User/Users.module.css'
import Pagination from '../common/Pagination/Pagination';
import User from './User';


const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {

    return <div className={classes.main}>
        <Pagination totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged} />
        {
            users.map(u => <User user={u}
                key={u.id}
                followingProgress={props.followingProgress}
                follow={props.follow}
                unfollow={props.unfollow} />)
        }
    </div>
}

export default Users;