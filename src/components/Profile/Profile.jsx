import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
    return (
    <div className={classes.content}>
        <div className={classes.header_content}>
          <img src='https://i0.wp.com/lokagraph.com/wp-content/uploads/2018/05/the-office-dunder-Mifflin-building-warehouse.jpg?fit=1024%2C683' alt='logo'></img>
        </div>
        <div>
          <img src='' />
        </div>
        <MyPosts />
    </div>
    )
}

export default Profile;