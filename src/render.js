import onChange from 'on-change';

const renderValidInput = () => {
  const input = document.querySelector('#url-input');
  const form = document.querySelector('.rss-form');
  input.style.border = '';
  form.reset();
  input.focus();
};
const renderErrors = () => {
  const input = document.querySelector('#url-input');
  input.style.border = 'thick solid red';
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
const watchedState = onChange(state, (path, value, previousValue) => {
  if (watchedState.inputUrl.state === 'valid') {
    renderValidInput();
    console.log(watchedState.inputUrl.data.urls);
  } else if (watchedState.inputUrl.state === 'invalid') {
    renderErrors();
  }
});

export default watchedState;
