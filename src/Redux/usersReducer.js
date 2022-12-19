
const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {   id: 1, 
            followed: true, 
            fullName: 'Alex', 
            status: 'I am in love', 
            location: {city: 'Saint-Petersburg', country: 'Russia'}
        },
        {   id: 2, 
            followed: true, 
            fullName: 'Liza', 
            status: 'I am in love too', 
            location: {city: 'Saint-Petersburg', country: 'Russia'}
        },
        {   id: 3, 
            followed: false, 
            fullName: 'Leha', 
            status: 'I live in another city', 
            location: {city: 'Astana', country: 'Kazakhstan'}
        },
    ]
};


export const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    return u.id === action.userId ? {...u, followed: true} : u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    return u.id === action.userId ? {...u, followed: false} : u;
                })
            }
        case SET_USERS: 
            return {
                ...state,
                users: [state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;