import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/usersReducer";
import Users from "./User";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        set_users: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}
 
const UserContainer =  connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;