import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';
import {BrowserRouter} from "react-router-dom";

const mainComponent =
    <React.Fragment>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.Fragment>;

ReactDOM.render(mainComponent, document.getElementById('root'));
