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
      <Route exact path="/offlinetv-watcher" component={Stream}/>
      <Route exact path="/offlinetv-watcher/" component={Stream}/>
      <Route exact path="/offlinetv-watcher/pokiThicc" component={Stream}/>
      <Route exact path="/offlinetv-watcher/toastyboi" component={Stream}/>
      <Route exact path="/offlinetv-watcher/scawwa" component={Stream}/>
      <Route exact path="/offlinetv-watcher/goblin" component={Stream}/>
      <Route exact path="/offlinetv-watcher/fedzoned" component={Stream}/>
      <Route exact path="/offlinetv-watcher/crackhead" component={Stream}/>
      <Route exact path="/offlinetv-watcher/comfychu" component={Stream}/>
      
    </Router>
  );
}

export default App;
