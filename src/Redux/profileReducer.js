const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, text: 'Hi, what`s going on?', counter: '4' },
        { id: 1, text: 'Very nice, dude!', counter: '10' },
        { id: 2, text: 'Booooo', counter: '5' },
        { id: 3, text: 'Try again, dude', counter: '3' },
    ],
    newPostText: 'Write your thoughts'
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST: 
            let newPost = {
                id: 5,
                text: state.newPostText,
                counter: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText      
        }    
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_NEW_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})