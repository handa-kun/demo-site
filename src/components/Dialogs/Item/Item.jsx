import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="logo" />
        </div>
    )
};


export default Item;