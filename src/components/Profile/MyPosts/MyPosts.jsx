import styles from './MyPosts.module.css'
import Post from './Posts/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validation/validator';
import { Element } from '../../common/FormsControl/FormsControl';



const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.text} counter={p.counter} />);

  let addPost = (values) => {
    props.addPost(values.newPost);
  };

  return (
    <div className={styles.posts}>
      <h3>My post</h3>
      <div>
        <div>
          <AddPostFormRedux className={styles.form} onSubmit={addPost} />
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
};

const Textarea = Element('textarea');

const NewPostForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} name='newPost' placeholder='Write your thoughts' validate={[required, maxLengthCreator(11)]} />
    </div>
    <div>
      <button>Post</button>
    </div>
  </form>
}
const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(NewPostForm);

export default MyPosts;