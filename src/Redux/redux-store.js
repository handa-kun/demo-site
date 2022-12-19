import { combineReducers, legacy_createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { navBarReducer } from "./navBarReducer";
import { profileReducer } from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navBarReducer,
    usersPage: usersReducer
});

let store = legacy_createStore(reducers);

export default store;