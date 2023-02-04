import { stopSubmit } from 'redux-form';
import { authAPI } from "../api/api";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';


let intialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    };
};

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    };
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }))
    };
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(authMe(null, null, null, false))
    };
};


export default authReducer;