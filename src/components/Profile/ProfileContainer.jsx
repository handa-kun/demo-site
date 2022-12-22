import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { setUsersProfile } from "../../Redux/profileReducer";
import { connect } from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            })
    }

    render() {
        
        return (
            <Profile {...this.props} /* profile={this.state.profile} *//>
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUsersProfile}) (ProfileContainer);