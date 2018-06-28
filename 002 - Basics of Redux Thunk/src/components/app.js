import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default class App extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser({id, name, email}) {
    return (
      <li className="list-group-item" key={id}>
        <span className="label label-defualt label-pill pull-xs-right">
          <a href={email}>{email}</a>
        </span>
        {name}
      </li>
    );
  }

  render() {
    return (
      <div>
        <h4>Email Directory</h4>
        <ul className="list-group">
          {this.props.users.map(this.renderUser)}
        </ul>
      </div>
    );
  }
}

export default connect((state => state), actions)(App);
