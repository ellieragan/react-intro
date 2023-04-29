import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { selectVideo } from '../actions';

function VideoListItem(props) {
  const dispatch = useDispatch();
  const imgUrl = props?.video?.snippet?.thumbnails?.default?.url;
  //  notice our nice use of optional chaining

  return (
    <li onClick={() => dispatch(selectVideo(props.video))}>
      <img src={imgUrl} alt="video" />
      <div>{props?.video?.snippet?.title}</div>
    </li>
  );
}

// we won't map any state here just actions
// some nice shorthand for that is simple passing in an object with the methods you want to end up connected to the store
export default connect(null, { selectVideo })(VideoListItem);

// function VideoListItem(props) {
//   const imgUrl = props.video.snippet.thumbnails.default.url;

//   return (
//     <li onClick={() => props.onVideoSelect(props.video)}>
//       <img src={imgUrl} alt="video" />
//       <div>{props.video.snippet.title}</div>
//     </li>
//   );
// }

// export default VideoListItem;
