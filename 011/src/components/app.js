import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h4>App</h4>
        <Link to="/users">Users</Link>
        <hr />
        {this.props.children}
      </div>
    );
  }
}
