import React from 'react';

export default (props) => {
  if (!props.video) {
    return <div><i>Loading</i></div>;
  }

  const videoId = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="title"><b>{props.video.snippet.title}</b></div>
        <div className="description">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};
