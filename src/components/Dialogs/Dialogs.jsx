import classes from './Dialogs.module.css'
import Item from './Item/Item';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <Item name={d.name} id={d.id}/> );
    let messagesElements = props.state.messages.map( m => <Message text={m.text}/> )

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}   
            </div>
        </div>
    )
};

export default Dialogs;