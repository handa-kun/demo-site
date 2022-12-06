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
            <Post message='Hi, what`s going on?' counter='4'/>
            <Post message='Very nice, dude!' counter='10'/>
          </div>
        </div>
    )
}

export default MyPosts;