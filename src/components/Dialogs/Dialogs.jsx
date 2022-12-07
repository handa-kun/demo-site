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
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog}>
                <Item name='Alex' id='1'/>
                <Item name='Liza' id='2'/>
                <Item name='Danya' id='3'/>
                <Item name='Leha' id='4'/>
                <Item name='Vanya' id='5'/>
                <Item name='Max' id='6'/> 
            </div>
            <div className={classes.messages}>
                <Message text='Hello!' />
                <Message text='How are you?' />
                <Message text='I`m fine.' />
            </div>
        </div>
    )
}

export default Dialogs;