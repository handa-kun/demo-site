import { usersAPI } from "../api/api";
import { updateObject } from '../utils/updateObject';

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObject(state.users, action.userId, "id", { followed: true }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObject(state.users, action.userId, "id", { followed: false }),
            };
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    };
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    };
    dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.deleteUsers.bind(usersAPI);
    followUnfollow(dispatch, userId, apiMethod, unfollowSuccess);
};

export const follow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.postUsers.bind(usersAPI);
    followUnfollow(dispatch, userId, apiMethod, followSuccess);
};

export default usersReducer;