import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">GATHER.</h1>
        </header>
        <div className="menu">
          <div className="markets"><Link to="/markets">Farmers Markets </Link></div>
          <div className="parades"><Link to="/parades"> Parades </Link></div>
          <div className="street-events"><Link to="/streetevents"> Street Events </Link></div>
        </div>
        <footer> <p>Let's connect</p></footer>
      </div>
    );
  }
}

export default Home;
