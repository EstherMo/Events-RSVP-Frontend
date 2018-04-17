import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import List from "./components/List";
import SingleItem from './components/SingleItem';
import Rsvps from './components/Rsvps';

class App extends Component {
  render() {
    //set the props to pass to each itemlist
    const MarketsList = () => <List type={"Farmers Market"} />;
    const ParadesList = () => <List type={"Parade"} />;
    const StreetEventsList = () => <List type={"Street Event"} />;
    
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/markets" render={MarketsList} />
            <Route exact path="/parades" render={ParadesList} />
            <Route exact path="/streetevents" render={StreetEventsList} />
            <Route name="event" path="/event/:eventId" component={SingleItem} />
            <Route exact path="/rsvps" component={Rsvps} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
