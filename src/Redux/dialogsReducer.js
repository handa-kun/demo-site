const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, text: newMessage }]
            };
        default:
            return state;
    }
}

export const sendMesageActionCreator = (newMessageBody) => ({ type: SEND_NEW_MESSAGE, newMessageBody })