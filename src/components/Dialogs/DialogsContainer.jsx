import React from 'react';
import { sendMesageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs'; 


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMesageActionCreator());
    };
    let onMessageChange = (message) => {
        props.store.dispatch(updateNewMessageActionCreator(message));
    };
    return <Dialogs sendMessage={sendMessage} 
                    onMessageChange={onMessageChange} 
                    dialogsPage={state}
                    newMessageText={state.newMessageText} />;
};

export default DialogsContainer;