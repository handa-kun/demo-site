import styles from './MyPosts.module.css'
import Post from './Posts/Post';
import React from 'react';
//import { Field } from 'redux-form';



const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.text} counter={p.counter} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
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
          <button onClick={addPost}>Send</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}

/* const FormPost = (props) => {
  return (
    <form>
      <div>
        <Field component={'textarea'} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
} */

export default MyPosts;