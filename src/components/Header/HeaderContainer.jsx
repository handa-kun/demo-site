import Header from "./Header";
import React from "react";
import { logout } from "../../Redux/authReducer";
import { connect } from "react-redux";

class HeaderConatiner extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(mapStateToProps, { logout })(HeaderConatiner);