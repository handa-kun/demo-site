import { stopSubmit } from 'redux-form';
import { authAPI, securtityAPI } from "../api/api";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/auth/GET_CAPTCHA_URL_SUCCESS';


let intialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    };
};

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });
export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData(id, email, login, true));
    };
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    }
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
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

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securtityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
};


export default authReducer;