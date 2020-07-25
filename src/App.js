import React, { Component } from "react";
import "./App.css";
import Home from './Home.js'

import DabbaraNagarjuna from './DabbaraNagarjuna.js'
import DabbaraShivaPrasad from './DabbaraShivaPrasad.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ position: "relative" }}>
       <Router>
             <Switch>
             <Route exact path="/" component={Home} /> 

                <Route  path="/DabbaraNagarjuna" component={DabbaraNagarjuna} /> 
                <Route  path="/DabbaraShivaPrasad" component={DabbaraShivaPrasad} /> 
             </Switch>  
         </Router>
      </div>
    );
  }
}

export default App;
