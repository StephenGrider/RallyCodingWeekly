import React, { Component } from 'react';
import _ from 'lodash';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar m-a m-x-auto text-center">
        <input value={this.state.term} onChange={(event) => this.onInputChange(event) } />
      </div>
    );
  }

  onInputChange(event) {
    const term = event.target.value;

    this.setState({ term });
    this.props.onChange(term);
  }
}
