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
        <div className={classes.posts}>
          My posts
          <div>
            New post
          </div>
          <div>
            <div className={classes.item}>
              post
            </div>
            <div className={classes.item}>
              post
            </div>
          </div>
        </div>
    </div>
    )
}

export default Profile;