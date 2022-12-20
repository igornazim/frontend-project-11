import onChange from 'onchange';

const state = {
  urlInput: {
    state: 'valid',
    data: {
      url: '',
    },
    errors: [],
  },
};
const watchedState = onChange(state, (path, value, previousValue) => {
  alert('value changed!');
  console.log(path);
  // => 'ui.value'
  console.log(value);
  // => 'other value'
  console.log(previousValue);
  // => 'hello'
});

export default watchedState;
