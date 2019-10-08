/* eslint-disable import/prefer-default-export */
const API = 'http://localhost:3000/locations'

export const getLocations = () => {
    // eslint-disable-next-line no-undef
    return fetch(API)
    .then(res => res.json())
    .catch(error => (error))
}
