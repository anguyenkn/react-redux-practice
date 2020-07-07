import axios from 'axios';

const KEY = 'AIzaSyDY34gRkvgDDQgoUiN714OxylfWhkGVhy4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
