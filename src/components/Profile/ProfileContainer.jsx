import Profile from "./Profile";
import React from "react";
import { getProfile } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { withRouter } from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        debugger;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
};

let AuthNavigateComponent = withAuthNavigate(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrl = withRouter(AuthNavigateComponent);

export default connect(mapStateToProps, { getProfile }) (WithUrl);