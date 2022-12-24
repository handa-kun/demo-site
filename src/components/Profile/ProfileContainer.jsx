import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { setUsersProfile } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            })
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});





export default connect(mapStateToProps, { setUsersProfile })(withRouter(ProfileContainer));