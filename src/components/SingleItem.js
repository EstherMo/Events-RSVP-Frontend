import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class SingleItem extends Component {
    state = {}
    saveEvent = () => {
        axios
          .post(process.env.REACT_APP_HOST + `/programs`, {eventName: this.props.location.state.name, programDate: this.props.location.state.startDate, location: this.props.location.state.location, category: this.props.location.state.category}).then(response => {
            console.log('saved successfully')
        });
      };

    //save to this participants event list
    // saveEvent = () => {
    //     axios
    //       .post(process.env.REACT_APP_HOST + `/participants/1/13`).then(response => {
    //         console.log('saved successfully')
    //     });
    //   };
    render() { 
        console.log("location state",this.props)
        return ( 
            <div>
                <div id="single_item">
                <h2> {this.props.location.state.name}</h2>
                <p> Where to gather: {this.props.location.state.location}</p>
                <p>  <b>This event is happening from </b> {this.props.location.state.startTime} to {this.props.location.state.endTime} in {this.props.location.state.borough} on {this.props.location.state.startDate}</p>
                </div>
                <button className= "button" styles="vertical-align:middle" onClick={this.saveEvent}> <span><Link to="/rsvps">RSVP to Event</Link> </span> </button>

                <div className="home2"> <Link to="/">take me home</Link> </div>

            </div>
            
         )
    }
}
 
export default SingleItem;