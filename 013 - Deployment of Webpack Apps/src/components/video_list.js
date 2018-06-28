import React, { Component } from 'react';

import VideoItem from './video_item';

export default class VideoList extends Component {
  render() {
    return (
      <div className="col-md-4 list-group">
        {this.videos()}
      </div>
    );
  }

  videos() {
    return this.props.videos.map((video, index) => {
      return (
        <VideoItem
          onClick={() => this.props.onVideoSelect(index)}
          key={video.etag}
          video={video} />
      );
    });
  }
}
