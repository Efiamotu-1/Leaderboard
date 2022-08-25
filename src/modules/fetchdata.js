(async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: 'TOP RANKED',
    }),
  });
  const data = await response.json();
  return data;
})();

const displayScores = (data) => {
  const list = document.querySelector('.scoresheet');
  list.innerHTML = '';
  data = data.sort((a, b) => b.score - a.score);
  data.map((score) => {
    const li = document.createElement('li');
    li.textContent = `${score.user} : ${score.score}`;
    return list.appendChild(li);
  });
};

export const addScore = async (user, score) => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameId = 'nCCQtzbyf726SO7fi4gJ';
  const scoreDetails = {
    user,
    score,
  };
  const response = await fetch(`${url}${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(scoreDetails),
  });
  const data = await response.json();
  return data;
};

export const getScores = async () => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${baseUrl}games/`;
  const gameId = 'nCCQtzbyf726SO7fi4gJ';
  const response = await fetch(`${url}${gameId}/scores/`);
  const data = await response.json();
  if (response.ok) {
    displayScores(data.result);
  }
};
