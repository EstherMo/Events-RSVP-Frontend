import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Rsvps extends Component {
    constructor() {
        super();
        this.state = {
          events: []
        };
      }

      //get events for this user
      getEvents = () => {
        axios
          .get(
            process.env.REACT_APP_HOST +`/programs`
          )
          .then(response => { console.log("response",response.data),this.setState({ events: response.data });
        });
      };
    
      componentDidMount() {
        this.getEvents();
      }
    render() { 
        return ( 
            <div>
                <div className="rsvps">
                    <p>my rsvps</p>
                    <div className="home3"> <Link to="/">take me home</Link> </div>
                    {this.state.events.map((event, index) => {
                        console.log("events map", event.eventName);
                        return(
                            <div className="list-type3">
                                <ul>
                                <li><a href="#">{event.eventName} </a></li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
         )
    }
}
 
export default Rsvps;