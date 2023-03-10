import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/User/UserContainer';
import Login from './components/Login/Login';
import React, { Component, Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <Suspense fallback={<div><Preloader /></div>}>
        <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
              <Routes>
                <Route path="/" element={<Navigate to="/profile" />} />
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path=':userId' element={<ProfileContainer />} />
                <Route path='/dialogs/*' element={<DialogsContainer />} />
                <Route path='/users/*' element={<UserContainer />} />
                <Route path='/login/' element={<Login />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </Suspense>
    );
  };
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

let MainApp = (props) => {
  return <Provider store={store}>
    <AppContainer />
  </Provider>
}

export default MainApp;

