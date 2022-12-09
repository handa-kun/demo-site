import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  
    return (
    <div className={classes.content}>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addNewPost={props.addNewPost} />
    </div>
    )
}

export default Profile;