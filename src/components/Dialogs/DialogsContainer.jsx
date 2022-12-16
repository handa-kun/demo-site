import { connect } from 'react-redux';
import { sendMesageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMesageActionCreator());
        },
        onMessageChange: (message) => {
            dispatch(updateNewMessageActionCreator(message));
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;