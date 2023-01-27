import { authMe } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let intialState = {
    initialized: false,
};

const appReducer = (state = intialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
};

export const initialziedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    promise.then(() => {
        dispatch(initialziedSuccess());
    })
}

export default appReducer;