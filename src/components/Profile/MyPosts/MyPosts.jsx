import styles from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      <h3>My post</h3> 
      <div>
        <div>
          <textarea name="" id="" cols="50" rows="5"></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      <div>
        <Post message='Hi, what`s going on?' counter='4' />
        <Post message='Very nice, dude!' counter='10' />
      </div>
    </div>
  )
}

export default MyPosts;