import axios from "axios";
import classes from '../User/User.module.css'

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
    
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.set_users(response.data.items);
            });
        };

    }

    
    return <div>
        <button onClick={getUsers}>Get</button>
        {
            props.users.map( u => <div key={u.id}> 
                <span>
                    <div>
                        <img src={'https://writers.com/wp-content/uploads/2022/06/icon-poetry.png'} className={classes.img} alt='logo'/>
                    </div>
                    <div>
                        { u.followed ? 
                        <button onClick={ () => props.unfollow(u.id)}>Unfollowed</button> : 
                        <button onClick={ () => props.follow(u.id)}>Followed</button>}
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

export default Users;