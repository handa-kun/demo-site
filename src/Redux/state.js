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
            ]
        },
    
        navBar: {
            friends: [
                { name: 'Alex' },
                { name: 'Liza' },
                { name: 'Leha' }
            ]
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    addNewPost(){
        let newPost = {
            id: 5,
            text: this._state.profilePage.newPostText,
            counter: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}


export default store;