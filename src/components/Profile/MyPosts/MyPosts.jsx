import styles from './MyPosts.module.css'
import Post from './Posts/Post';
import React from 'react';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map( p => <Post message={p.text} counter={p.counter} />);

  let newPostElement = React.createRef();

  let addPost = () => {
     let text = newPostElement.current.value;
     props.addNewPost(text);
  };

  return (
    <div className={styles.posts}>
      <h3>My post</h3> 
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Send</button>
        </div>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;