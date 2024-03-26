import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

let title = 'Hello'

let style = {
    fontSize: '18px',
    color: '#fff',
}

root.render(
  
    <>
        <App/>
    </>
    
  
);
