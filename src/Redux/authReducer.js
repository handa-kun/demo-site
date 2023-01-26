import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


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
    }
};

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMe())
            }
        });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMe(null, null, null, false))
            }
        });
    }
}

export default authReducer;