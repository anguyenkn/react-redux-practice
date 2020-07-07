import React from 'react';
import Spinner from './Spinner';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <div className='ui segment' style={{ height: '400px' }}>
          <Spinner message='Loading videos...' />;
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui segment'>
        <div className='ui embed'>
          <iframe title='video player' src={videoSrc} />
        </div>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
