import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/Redev.React.1-project.React-cheatsheet'>
        <App />
    </BrowserRouter>
);
