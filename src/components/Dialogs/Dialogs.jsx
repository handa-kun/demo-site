import classes from './Dialogs.module.css'
import Item from './Item/Item';
import Message from './Message/Message';
import React from 'react';



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <Item name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message key={m.id} text={m.text} />);
   
    let sendMessage = () => {
        props.sendMessage();
    };
    let onMessageChange = (e) => {
        let message = e.target.value;
        props.onMessageChange(message);
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
                    <textarea 
                        value={props.newMessageText}
                        onChange={onMessageChange}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;