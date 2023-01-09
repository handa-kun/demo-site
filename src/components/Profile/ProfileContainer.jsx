import Profile from "./Profile";
import React from "react";
import { getProfile } from "../../Redux/profileReducer";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};

       return <Children {...props} match = {match}/>
   }
 } 

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to={'/login'} />;

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfile }) (WithUrl);