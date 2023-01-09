import { usersAPI } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'; 

let initialState = {
    posts: [
        { id: 0, text: 'Hi, what`s going on?', counter: '4' },
        { id: 1, text: 'Very nice, dude!', counter: '10' },
        { id: 2, text: 'Booooo', counter: '5' },
        { id: 3, text: 'Try again, dude', counter: '3' },
    ],
    newPostText: 'Write your thoughts',
    profile: null
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
        case SET_USERS_PROFILE: 
            return {...state, profile: action.profile}      
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_NEW_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile });

export const getProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUsersProfile(response.data));
        });
    }
}