import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './Redux/state'
import { addNewPost } from './Redux/state';


 export let rerenderEntireTree = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} />
    </React.StrictMode>
  );
  
}