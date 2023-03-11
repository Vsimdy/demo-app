import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

const myFirstElement = <h1>Hello React!</h1>

const root = createRoot(document.getElementById('root'));
root.render(myFirstElement);