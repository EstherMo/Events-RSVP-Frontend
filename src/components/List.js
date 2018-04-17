import React, { Component } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

class List extends Component {
  constructor() {
    super();
    this.state = {
      eventDetails: []
    };
  }
  getList = () => {
    axios
      .get(
        `https://data.cityofnewyork.us/resource/8end-qv57.json?event_type=${this.props.type}&$limit=30`
      )
      .then(response => { console.log("response",response),this.setState({ eventDetails: response.data });
    });
  };

  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <div className="text list">
        <h2 className="text"> {this.props.type}s </h2>
        <div className="home"> <Link to="/">take me home</Link> </div>
        {this.state.eventDetails.map((event, index) => {
          let startDate = new Date(event.start_date_time);
          let endDate = new Date(event.end_date_time);
          //console.log("time", startDate.toLocaleTimeString(),"date",startDate.toDateString());
          console.log("event",event);
          return (
            <div id="list">
            <Link key={index} to={{
                pathname: `/event/${index +1} `,
                state: { 
                  agency: `${event.event_agency}`,
                  name: `${event.event_name}`,
                  location: `${event.event_location}`,
                  borough:`${event.event_borough}`,
                  startDate: `${startDate.toDateString()}`,
                  endDate: `${endDate.toDateString()}`,
                  startTime: `${startDate.toLocaleTimeString()}`,
                  endTime: `${endDate.toLocaleTimeString()}`,
                  category: this.props.type,
            }
            }}> 
            <br/> <br/> {event.event_name} <br/> on <br/>  {startDate.toDateString()} </Link> </div>
          );
        })}
        <br/><br/> 
        <p />
      </div>
    );
  }
}

export default List;
