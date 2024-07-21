const { default: axios } = require('axios');

const starWarsAPI = axios.create({ baseURL: 'https://sw-api.starnavi.io' });

export const fetchHeroes = async (page = 1, name) => {
  try {
    const { data } = await starWarsAPI.get('/people', {
      params: { page, name },
    });
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to fetch Heroes');
  }
};

export const fetchDataById = async (key, id) => {
  try {
    const { data } = await starWarsAPI.get(`/${key}/${id}`);
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to fetch Data');
  }
};

export const fetchDataByIdArray = async (key, idArray) => {
  try {
    const result = [];
    if (idArray.length) {
      for (const id of idArray) {
        const { data } = await starWarsAPI.get(`/${key}/${id}`);
        result.push(data);
      }
      return result;
    }
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to fetch Data');
  }
};
