import classes from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={classes.item}>{props.text}
            <img src="https://www.clipartmax.com/png/middle/97-978328_avatar-icon-free-fa-user-circle-o.png" alt="" />
        </div>
    )
};


export default Message;