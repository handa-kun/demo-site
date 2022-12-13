import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.navBar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile 
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs
              store={props.store} />} />
            <Route path='/friends/*' element={<Friends />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} /> 
            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
