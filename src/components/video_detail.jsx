import React from 'react';
import { useSelector } from 'react-redux';

// function VideoDetail({ video }) {
//   const { videoId } = video.id; // is example of destructuring, pulling videoId from out of the object that is video.id
//   const url = `https://www.youtube.com/embed/${videoId}`;
//   if (!video) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <div id="video-detail">
//         <iframe src={url} title="video-detail" />
//         <div className="details">
//           <div>{video.snippet.title}</div>
//           <div>{video.snippet.description}</div>
//         </div>
//       </div>
//     );
//   }
// }
function VideoDetail(props) {
  const video = useSelector((reduxState) => reduxState.video.selected);
  if (!video) {
    console.log('HELP');
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(video);

  return (
    // <div id="video-detail">
    //   <iframe src={url} title="video-detail" />
    //   <div className="details">
    //     <div>{video.snippet.title}</div>
    //     <div>{video.snippet.description}</div>
    //   </div>
    // </div>
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title="youtube detail" className="embed-responsive-item" src={url} />
    </div>
  );
}

export default VideoDetail;
