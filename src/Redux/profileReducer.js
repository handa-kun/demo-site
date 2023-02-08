import { profileAPI, usersAPI } from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTOS = 'SAVE_PHOTOS';


let initialState = {
    posts: [
        { id: 0, text: 'Hi, what`s going on?', counter: 4 },
        { id: 1, text: 'Very nice, dude!', counter: 5 },
        { id: 2, text: 'Booooo', counter: 3 },
        { id: 3, text: 'Try again, dude', counter: 2 },
    ],
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 4,
                text: action.newPostText,
                counter: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile };
        case SAVE_PHOTOS:
            return { ...state, profile: { ...state.profile.photos, photos: action.photos } };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_NEW_POST, newPostText })
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTOS, photos });

export const getProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    };
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhotos(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    };
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    };
};

