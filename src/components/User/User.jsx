import React from "react";
import axios from "axios";
import classes from '../User/User.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=')
            .then(response => {
                this.props.set_users(response.data.items);
            });
    }

    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize;

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={classes.main}>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={'https://writers.com/wp-content/uploads/2022/06/icon-poetry.png'} className={classes.img} alt='logo' />
                        </div>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollowed</button> :
                                <button onClick={() => this.props.follow(u.id)}>Followed</button>}
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
}

export default Users;