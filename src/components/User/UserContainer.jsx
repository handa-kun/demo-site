import { connect } from "react-redux";
import { follow, toggleFollowingProgress, setCurrentPage, unfollow, getUsers, } from "../../Redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader";
import { compose } from "redux";
import { followingProgress, getCurrentPage, getPageSize, getTotalUsersCount, isFetching, takeUsers } from '../../Redux/selectors';


class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingProgress={this.props.followingProgress}
            />}
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        users: takeUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: isFetching(state),
        followingProgress: followingProgress(state),
    }
};
/* 
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} */

export default compose(
    connect(mapStateToProps,
        { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersAPI)
