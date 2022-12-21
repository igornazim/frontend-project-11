import './styles.scss';
import 'bootstrap';
import { string } from 'yup';
import watchedState from './render.js';

const schema = string().url().nullable().notOneOf(watchedState.inputUrl.data.urls);
const form = document.querySelector('.rss-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const url = formData.get('url');
  schema.isValid(url)
    .then((data) => {
      if (data === true) {
        watchedState.inputUrl.data.urls.push(url);
        watchedState.inputUrl.state = 'valid';
      } else if (data === false) {
        watchedState.inputUrl.state = 'invalid';
      }
    })
    .catch((err) => {
      console.log('error!!!', err);
    });
});
