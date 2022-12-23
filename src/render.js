import onChange from 'on-change';

const render = () => (path, value) => {
  if (path === 'inputUrl.data.urls') {
    const input = document.querySelector('#url-input');
    const form = document.querySelector('.rss-form');
    input.style.border = '';
    form.reset();
    input.focus();
  } else if (value === 'invalid') {
    const input = document.querySelector('#url-input');
    input.style.border = 'thick solid red';
  }
};
const state = {
  inputUrl: {
    state: 'valid',
    data: {
      urls: [],
    },
    errors: [],
  },
};
const watchedState = onChange(state, render());

export default watchedState;
