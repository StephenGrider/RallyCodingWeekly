import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import YoutubeSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.search = YoutubeSearch({ key: 'AIzaSyBMC6TKNgaO8ynhaKm6c-0TYsXNzSJXkO8' });

    this.state = {
      videos: [],
      index: 0
    };
    this.videoSearch('Music');
  }

  render() {
    var onSearch = _.debounce((term) => { this.videoSearch(term) }, 250);

    return (
      <div>
        <SearchBar onChange={onSearch} />
        <div className="row">
          <VideoDetail video={this.state.videos[this.state.index]} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={index => this.setState({index})} />
        </div>
      </div>
    );
  }

  videoSearch(term) {
    this.search(term, (videos) => {
      this.setState({ videos });
    });
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
