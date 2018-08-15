import React, { Component } from "react";
import APIhelper from "../components/api/APIHelper";
import dog from "../images/dog.png";

const configAPI = "/api/ramlizer";
const getAPI = "/api/getData";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "unknown"
    };
    this.setComponentState = this.setComponentState.bind(this);
  }

  componentDidMount() {
    const self = this;
    APIhelper.getData(getAPI).then(function(data) {
      self.setComponentState(data);
    });
  }

  setComponentState(data) {
    this.setState({ message: data.message });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        Hello
        <img src={dog} className="small-img" />
        <span className="message">The status is {message}</span>
      </div>
    );
  }
}

export default About;
