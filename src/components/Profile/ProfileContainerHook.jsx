import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from "../../Redux/profileReducer";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    logged: state.auth.id,
});

const ProfileContainerHook = (props) => {

    let { userId } = useParams();
    if (!userId) {
        userId = props.logged;
    };
    useEffect(() => {
        getProfile(userId);
        getStatus(userId);
    });

    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    )
};

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withAuthNavigate
)(ProfileContainerHook)