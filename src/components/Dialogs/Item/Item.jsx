import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.item + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <a href="https:youtube.com">
                <img src="https://w7.pngwing.com/pngs/305/281/png-transparent-russian-literature-text-sticker-others-miscellaneous-text-monochrome-thumbnail.png" alt="logo" />
            </a>
        </div>
    )
};


export default Item;