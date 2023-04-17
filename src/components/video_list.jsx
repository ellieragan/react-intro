import React from 'react';
import VideoListItem from './video_list_item';

function VideoList(props) {
  const { videos } = props;
  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />;
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
}

export default VideoList;
