/* eslint-disable import/prefer-default-export */
const API = 'http://localhost:3000/locations'

export const getLocations = () => {
    return fetch(API)
    .then(res => res.json())
    .catch(error => console.log(error))
}