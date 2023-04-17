import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import youtubeSearch from '../services/youtube-api';
import VideoDetail from './video_detail';
import SearchBar from './search_bar';
import VideoList from './video_list';

// youtubeSearch('pixar').then((videos) => {
//   console.log(videos);
// });

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  };

  useEffect(() => {
    search('pixar');
  }, []);

  console.log(search);
  console.log(videos);
  console.log(selectedVideo);
  const debouncedSearch = useCallback(debounce(search, 500), []);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />
      <div id="video-section">
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
      </div>
    </div>
  );
}

export default App;
