import axios from 'axios';

// REST API axios requests

const starWarsAPI = axios.create({ baseURL: 'https://sw-api.starnavi.io' });

// First of all creating instance from axios with baseURL of our API endpoint

// All async functions are covered by try catch statement for catching errors if any.

export const fetchHeroes = async (page = 1, name) => {
  try {
    const { data } = await starWarsAPI.get('/people', {
      params: { page, name__contains: name },
    });
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to fetch Heroes');
  }
};

// fetchHeroes async function making GET request from API endpoint for fetching heroes by params taken from function parameters page and name for filtering
// page has default value 1

export const fetchDataById = async (key, id) => {
  try {
    const { data } = await starWarsAPI.get(`/${key}/${id}`);
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(`${error.message}`);
  }
};

// fetchDataById async function making GET request from API endpoint for fetching data by params taken from function parameters key and id
// key representing resource from which data fetched and id is id of required object

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

// fetchDataByIdArray async function making GET request from API endpoint for fetching data by params taken from function parameters key and idArray
// key representing resource from which data fetched and idArray is array of ids of required objects

export const fetchDataByKeyAndIdArray = async (key, array) => {
  try {
    const results = [];
    const { data } = await starWarsAPI.get(`/${key}`);
    results.push(...data.results);
    await recursiveFetch(data.next, results);
    return results.filter((item) => array.includes(item.id));
  } catch (error) {
    console.error(error.message);
    throw new Error('Failed to fetch Data');
  }
};

// For decreasing amount of fetches - I created additional fetching option - byKeyAndIdArray.
// This is a fetch request with the recursive function in it. Logic is simple,
// if we have to fetch films - there is no reason to make a request for each film separately
// As totally we have 6 films in db for the moment and it would take years for new one to come out.
// So we can make one general request for all fims and then just filter them.

// With starships almost same, only need to add condition if it is reasonable to fetch all starships (4 requests)
// or to do it one by one (some heroes never have been on starship at all)

export const recursiveFetch = async (requestPage, results) => {
  if (requestPage) {
    const { data } = await axios.get(requestPage);
    results.push(...data.results);
    await recursiveFetch(data.next, results);
  }
  return results;
};
