import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID g_wRRioGiNfQJZ8PZ7On4EIpZTClozulxeRpA1AqgN8',
  },
});
