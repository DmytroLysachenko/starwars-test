const { default: axios } = require('axios');

const starWarsAPI = axios.create({ baseURL: 'https://sw-api.starnavi.io' });

export default starWarsAPI;
