import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Stream from './Components/Stream'
import Header from './Components/Header'
import Backdrop from './Components/Backdrop'



import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './Components/header.css'

function App() {
  return (
    <Router>
      <Header />
      <Backdrop />
      <Route exact path="/" component={Stream}/>
      <Route exact path="/pokiThick" component={Stream}/>
      <Route exact path="/toastyboi" component={Stream}/>
      <Route exact path="/scawwa" component={Stream}/>
      <Route exact path="/goblin" component={Stream}/>
      <Route exact path="/fedzoned" component={Stream}/>
      <Route exact path="/crackhead" component={Stream}/>
      <Route exact path="/comfychu" component={Stream}/>
      
    </Router>
  );
}

export default App;
