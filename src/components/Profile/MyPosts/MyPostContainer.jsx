
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;