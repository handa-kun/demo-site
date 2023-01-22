import classes from './Dialogs.module.css'
import Item from './Item/Item';
import Message from './Message/Message';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validation/validator';
import { Element } from '../common/FormsControl/FormsControl';




const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <Item name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message key={m.id} text={m.text} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Navigate to={'/login'} />;

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
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
};

const Textarea = Element('textarea');

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
            name='newMessageBody'
            placeholder='Enter your message'
            validate={[required, maxLengthCreator(50)]} />
        <button>Send</button>
    </form>
}
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;