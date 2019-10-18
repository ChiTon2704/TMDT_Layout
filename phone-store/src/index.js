import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Components/NavComponent/index.scss';
import './Components/SearchComponent/index.scss';
import './Components/Body/index.scss';
import './Components/Body2/index.scss';
import './Components/Footer/index.scss';
import './TypePhone/index.scss';
import * as serviceWorker from './serviceWorker';
import AllPhone from './TypePhone/AllPhone';
import Footer from './Components/Footer';
import Body from './Components/Body/index';
import Body2 from './Components/Body2/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

ReactDOM.render(
    (
        <Router>
            <App />
            <Route path='/' exact>
                <div className="body"> <Body /></div>
                <div className="body"> <Body2 /></div>
            </Route>
            <Route path='/allphone' component={AllPhone} />
            <Footer />
        </Router>
    )
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
