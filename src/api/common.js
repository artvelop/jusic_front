import axios from 'axios';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = 'http://ec2-13-125-236-211.ap-northeast-2.compute.amazonaws.com:5000/';
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },
};
