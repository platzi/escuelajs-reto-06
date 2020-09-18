/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const getData = async (API_URL) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default getData;