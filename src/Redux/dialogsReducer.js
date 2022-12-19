const UPDATE_NEW_MESSAGE_TEXT = 'UPDTAE-NEW-MESSAGE-TEXT';
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
    newMessageText: '',
}

export const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SEND_NEW_MESSAGE: 
            let newMessage = {
                id: 6,
                text: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state;
    }
}


export const updateNewMessageActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})
export const sendMesageActionCreator = () => ({type: SEND_NEW_MESSAGE})