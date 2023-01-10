import { connect } from 'react-redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { sendMesageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
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

let AuthNavigateComponent = withAuthNavigate(Dialogs);

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default DialogsContainer;