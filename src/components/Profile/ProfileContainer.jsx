import Profile from "./Profile";
import React from "react";
import { getProfile, getStatus, updateStatus, savePhoto } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    logged: state.auth.id
});

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.logged;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    };

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
        )
    };
};

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)