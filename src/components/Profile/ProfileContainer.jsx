import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { setUsersProfile } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};

       return <Children {...props} match = {match}/>
   }
 } 

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

let WithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile }) (WithUrl);