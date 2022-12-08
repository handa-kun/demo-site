let state = {
    profilePage: {
        posts: [
            { id: 0, text: 'Hi, what`s going on?', counter: '4' },
            { id: 1, text: 'Very nice, dude!', counter: '10' },
        ]
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
};

export default state;