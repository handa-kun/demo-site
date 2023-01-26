import Header from "./Header";
import React from "react";
import { authMe, logout } from "../../Redux/authReducer";
import { connect } from "react-redux";

class HeaderConatiner extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect(mapStateToProps, { authMe, logout })(HeaderConatiner);