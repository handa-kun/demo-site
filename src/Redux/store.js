import { dialogsReducer } from "./dialogsReducer";
import { navBarReducer } from "./navBarReducer";
import { profileReducer } from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, text: 'Hi, what`s going on?', counter: '4' },
                { id: 1, text: 'Very nice, dude!', counter: '10' },
                { id: 1, text: 'Booooo', counter: '5' },
                { id: 1, text: 'Try again, dude', counter: '3' },
            ],
            newPostText: 'Write your thoughts'
        },
    
        dialogsPage: {
            dialogs: [
                { id: 0, name: 'Alex' },
                { id: 1, name: 'Liza' },
                { id: 2, name: 'Danya' },
                { id: 3, name: 'Leha' },
                { id: 4, name: 'Vanya' },
                { id: 5, name: 'Max' }
            ],
            messages: [
                { id: 0, text: 'Hello' },
                { id: 1, text: 'How are you?' },
                { id: 2, text: 'I`m fine.' },
                { id: 3, text: 'Thanks' },
                { id: 4, text: 'I cannot belive!' },
                { id: 5, text: 'Cooool!' }
            ],
            newMessageText: ''
        },
    
        navBar: {
            friends: [
                { name: 'Alex' },
                { name: 'Liza' },
                { name: 'Leha' }
            ]
        },
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);

        this._callSubscriber(this._state)
    }
}

export default store;