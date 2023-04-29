import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setVideos } from '../actions';
import youtubeSearch from '../services/youtube-api';
import VideoDetail from './video_detail';
import SearchBar from './search_bar';
import VideoList from './video_list';

// youtubeSearch('pixar').then((videos) => {
//   console.log(videos);
// });

function YouTube(props) {
  const dispatch = useDispatch();
  // const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((videos) => {
      dispatch(setVideos(videos));
    });
  };

  const debouncedSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    search('pixar');
  }, []);

  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />
      <div id="video-section">
        <VideoDetail />
        <VideoList />
      </div>
    </div>
  );
}

export default YouTube;
