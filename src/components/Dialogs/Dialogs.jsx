import classes from './Dialogs.module.css'
import Item from './Item/Item';
import Message from './Message/Message';
import React from 'react';
import { sendMesageActionCreator, updateNewMessageActionCreator } from '../../Redux/state';



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <Item name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message text={m.text} />);
    let newMessageText = state.newMessageText;

    let newMessage = React.createRef();
    
    let sendMessage = () => {
        props.store.dispatch(sendMesageActionCreator());
    };

    let onMessage = (e) => {
        let message = e.target.value;
        let action = updateNewMessageActionCreator(message);
        props.store.dispatch(action);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.container_message}>
                <div>
                    <img src="" alt="logo" />
                </div>
                <div className={classes.message}>
                    <textarea ref={newMessage} 
                    value={newMessageText}
                    onChange={onMessage}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;