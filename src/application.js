import './styles.scss';
import 'bootstrap';
import { string } from 'yup';
import watchedState from './render.js';

const app = () => {
  const form = document.querySelector('.rss-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const schema = string().url().nullable().notOneOf(watchedState.inputUrl.data.urls);
    console.log(watchedState.inputUrl.data.urls);
    const formData = new FormData(form);
    const url = formData.get('url');
    schema.isValid(url)
      .then((data) => {
        if (data === true) {
          watchedState.inputUrl.data.urls.push(url);
        } else if (data === false) {
          watchedState.inputUrl.state = 'invalid';
        }
      })
      .catch((err) => {
        console.log('error!!!', err);
      });
  });
};

export default app;
