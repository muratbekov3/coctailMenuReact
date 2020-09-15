import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Detail from './Detail'
import {Router, Route} from "react-router"
import createBrowserHistory from 'history/createBrowserHistory'
import Ingridient from './Ingridient'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Route path='/' component={App} exact></Route>
      <Route path='/detail/:name' component={Detail} exact></Route>
      <Route path="/ingridient/:ingridient" component={Ingridient} exact></Route>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
