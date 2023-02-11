const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
    dialogs: [
        { id: 0, name: 'Alex' },
    ],
    messages: [
        { id: 0, text: 'Hello' },
        { id: 1, text: 'How are you?' },
        { id: 2, text: 'I`m fine.' },
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