import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

function App(){
    return(
        <>

            <h1>
                Hello world
            </h1>
<i className=" bi bi-list" id="menu-icon"></i>;
<i className="bi bi-caret-down-fill"></i>;
        </>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);