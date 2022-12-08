import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 0, text: 'Hi, what`s going on?', counter: '4' },
  { id: 1, text: 'Very nice, dude!', counter: '10' },
]

let dialogs = [
  { id: 0, name: 'Alex' },
  { id: 1, name: 'Liza' },
  { id: 2, name: 'Danya' },
  { id: 3, name: 'Leha' },
  { id: 4, name: 'Vanya' },
  { id: 5, name: 'Max' }
];

let messages = [
  { id: 0, text: 'Hello' },
  { id: 1, text: 'How are you?' },
  { id: 2, text: 'I`m fine.' },
  { id: 3, text: 'Thanks' },
  { id: 4, text: 'I cannot belive!' },
  { id: 5, text: 'Cooool!' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
