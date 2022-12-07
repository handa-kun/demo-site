import styles from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {

  let posts = [
    {id:0, text:'Hi, what`s going on?', counter:'4'},
    {id:1, text:'Very nice, dude!', counter:'10'}, 
  ]

  let postsElements = posts.map( p => <Post message={p.text} counter={p.counter} />);

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
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;