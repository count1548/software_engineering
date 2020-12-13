import { classes } from 'istanbul-lib-coverage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from './component/Menu'
import MainPage from './router/MainPage'
import ContactUs from './router/Contact'
import RegistRSS from './router/RegistRSS'
import Post from './router/ViewPost'
import SignUp from './router/SignUp'
import SignIn from './router/SignIn'


function App() {
  return (
    <Router>
      <div /*className={classes.nav} */>
        <Menu/>
      </div>
      <div /*className={classes.content}*/>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/contact" component={ContactUs}/>
        <Route exact path="/regist" component={RegistRSS}/>
        <Route exact path="/viewpost" component={Post}/>
      </div>
    </Router>
  );
}

export default App;
