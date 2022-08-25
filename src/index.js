import './style.css';

import { refresh, form } from './modules/domElements.js';
import { addScore, getScores } from './modules/fetchdata.js';

refresh.addEventListener('click', getScores);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = form.name.value;
  const score = form.score.value;
  await addScore(user, score);
  getScores();
  form.name.value = '';
  form.score.value = '';
});
