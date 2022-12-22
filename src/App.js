import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/User/UserContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav /> 
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/friends/*' element={<Friends />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} /> 
            <Route path='/settings/*' element={<Settings />} />
            <Route path='/users/*' element={<UserContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
