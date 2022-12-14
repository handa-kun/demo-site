const UPDATE_NEW_MESSAGE_TEXT = 'UPDTAE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = {
                id: 6,
                text: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}


export const updateNewMessageActionCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})
export const sendMesageActionCreator = () => ({type: SEND_NEW_MESSAGE})