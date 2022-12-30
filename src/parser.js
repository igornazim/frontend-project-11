import axios from 'axios';

const getFlowData = (url) => axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${url}`)
  .then((response) => {
    if (!response.data.contents.match(/rss version/)) {
      throw new Error('Not RSS');
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(response.data.contents, 'text/html');
    return doc;
  });

export default getFlowData;
