import yup from 'yup';
import watchedState from './render.js';
import './styles.scss';
import 'bootstrap';

const btn = document.querySelector('.h-100');
btn.addEventListener('click', (e) => {
  watchedState.urlInput.data.url = e.target.value;
});
