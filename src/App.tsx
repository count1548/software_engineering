import { classes } from 'istanbul-lib-coverage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from './component/Menu'
import MainPage from './router/MainPage'
import ContactUs from './router/Contact'
import Post from './router/ViewPost'


function App() {
  return (
    <Router>
      <div /*className={classes.nav} */>
        <Menu/>
      </div>
      <div /*className={classes.content}*/>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/contact" component={ContactUs}/>
        <Route exact path="/viewpost" component={Post}/>
      </div>
    </Router>
  );
}

export default App;
