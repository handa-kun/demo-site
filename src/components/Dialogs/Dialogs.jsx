import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.item}>{props.text}</div>
    )
};


const Dialogs = (props) => {

    let dialogs = [
        { id: 0, name: 'Alex' },
        { id: 1, name: 'Liza' },
        { id: 2, name: 'Danya' },
        { id: 3, name: 'Leha' },
        { id: 4, name: 'Vanya' },
        { id: 5, name: 'Max' }
    ];

    let messages = [
        { id: 0, text: 'Hello' },
        { id: 1, text: 'How are you?' },
        { id: 2, text: 'I`m fine.' },
        { id: 3, text: 'Thanks' },
        { id: 4, text: 'I cannot belive!' },
        { id: 5, text: 'Cooool!' }
    ];


    let dialogsElements = dialogs.map( d => <Item name={d.name} id={d.id}/> );
    let messagesElements = messages.map( m => <Message text={m.text}/> )

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