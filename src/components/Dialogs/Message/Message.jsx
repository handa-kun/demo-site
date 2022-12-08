import classes from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={classes.item}>
            {props.text}
             <img src="https://toppng.com/uploads/preview/book-11549420966kupbnxvyyl.png" alt="logo" />
        </div>
    )
};


export default Message;