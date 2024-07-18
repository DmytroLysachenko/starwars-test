const { default: axios } = require('axios');

const starWarsAPI = axios.create({ baseURL: 'https://sw-api.starnavi.io' });

export const fetchHeroes = async () => {
  const { data } = await starWarsAPI.get('/people');
  return data;
};

export const nextPageOfHeroes = async () => {};
