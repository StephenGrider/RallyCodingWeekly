import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class PostsList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  handlePostSelect({ id }, event) {
    const { selectPost, deselectPost } = this.props;

    event.target.checked ? selectPost(id) : deselectPost(id);
  }

  renderPost(post) {
    console.log(_.contains(this.props.selectedPostIds, post.id))
    return (
      <li className="list-group-item" key={post.id}>
        <input
          checked={_.contains(this.props.selectedPostIds, post.id)}
          type="checkbox"
          onChange={this.handlePostSelect.bind(this, post)} />
        {post.title}
      </li>
    );
  }

  render() {
    return (
      <ul className="list-group">
        {_.map(this.props.posts, this.renderPost.bind(this))}
      </ul>
    );
  }
}

export default connect(({posts, selectedPostIds}) => ({posts, selectedPostIds}) , actions)(PostsList)
