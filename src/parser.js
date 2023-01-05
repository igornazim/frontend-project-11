import axios from 'axios';

const getFlowData = (url) => axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${url}`)
  .then((response) => {
    if (response.status < 200 && response.status > 300) {
      throw new Error('Network error');
    }
    if (!response.data.contents.match(/rss/)) {
      throw new Error('Not RSS');
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(response.data.contents, 'text/xml');
    return [doc, url];
  });

export default getFlowData;
