import React, { Component } from 'react';
const API = 'http://localhost:3000/locations';
const fetch = require("node-fetch");


class FetchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
      .then(response => {
        if (response.ok) {
          return (response.json());
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ info:data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }


  render() {
    return <div>{console.log(this.state.info)}</div>;
  }
}

export default FetchComponent;
