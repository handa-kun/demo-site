import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/User/UserContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './Redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './Redux/redux-store';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  };

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Nav />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path=':userId' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/friends/*' element={<Friends />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
              <Route path='/users/*' element={<UserContainer />} />
              <Route path='/login/' element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
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

