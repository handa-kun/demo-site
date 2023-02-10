import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};


export default Item;