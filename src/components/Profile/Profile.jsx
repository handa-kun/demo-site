import store from '../../Redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer store={store} />
        </div>
    )
}

export default Profile;