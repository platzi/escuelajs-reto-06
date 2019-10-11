import fetch from 'node-fetch';

const getMarkers = async (
  API,
  config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
) => {
  try {
    const response = await fetch(API, config);

    if (!response.ok) {
      return Promise.reject(new Error(`Error fetching url: ${API}`));
    }

    return Promise.resolve(await response.json());
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};

export default getMarkers;
