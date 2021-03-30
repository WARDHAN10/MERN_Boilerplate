import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login'
import Test1 from "./Test1"
import {browserHistory,Link,Router,Route} from 'react-router'
import Thanks from './Thanks'




ReactDOM.render(

    <div>

      <Router history={browserHistory}>

        <Route path="/" component={Test1}/>
        <Route exact path="/Test1"  component={Test1} />
 
        <Route exact path="/login"  component={Login} />
        <Route exact path="/signup" component={App} />
        <Route exact path="/thanks" component={Thanks} /> 
      </Router>
     
    </div>
      ,
  document.getElementById('root')
);
