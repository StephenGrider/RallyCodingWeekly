import React from 'react';

export default ({ video, onClick }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={onClick} className="list-group-item">
      <div className="video-item media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}
