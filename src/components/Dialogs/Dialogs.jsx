import classes from './Dialogs.module.css'
import Item from './Item/Item';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <Item name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map( m => <Message text={m.text}/> );

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch({ type: 'SEND-NEW-MESSAGE' });
    } 

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: message};
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
               {messagesElements}   
            </div>
            <div>
                <textarea ref={newMessageElement}
                onChange={onMessageChange}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
};

export default Dialogs;