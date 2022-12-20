import React from "react";
import axios from "axios";
import classes from '../User/User.module.css'

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.set_users(response.data.items);
                });
        };

    }
    render() {
        return <div>
            <button onClick={this.getUsers}>Get</button>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={'https://writers.com/wp-content/uploads/2022/06/icon-poetry.png'} className={classes.img} alt='logo' />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollowed</button> :
                                <button onClick={() => this.props.follow(u.id)}>Followed</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                        </span>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;