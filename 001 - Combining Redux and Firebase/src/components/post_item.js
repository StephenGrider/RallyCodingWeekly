import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostItem extends Component {
  handleClick() {
    this.props.deletePost(this.props.id);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.post}
        <button
          onClick={this.handleClick.bind(this)}
          className="btn btn-danger right">
          Delete
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(PostItem);
