import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
          My posts
          <div>
            New post
          </div>
          <div>
            <Post message='Hi, what`s going on?'/>
            <Post message='Very nice, dude!'/>
          </div>
        </div>
    )
}

export default MyPosts;