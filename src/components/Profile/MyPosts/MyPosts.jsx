import styles from './MyPosts.module.css'
import Post from './Posts/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';


const MyPosts = (props) => {
  
  let postsElements = props.posts.map( p => <Post message={p.text} counter={p.counter} />);

  let newPostElement = React.createRef();

  let addPost = () => {
     props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text) ;
    props.dispatch(action);
  };

  return (
    <div className={styles.posts}>
      <h3>My post</h3> 
      <div>
        <div>
          <textarea ref={newPostElement} 
                    value={props.newPostText}
                    onChange={onPostChange} />
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