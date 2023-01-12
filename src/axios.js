import axios from "axios"

export const makeRequest = axios.create({
    baseURL:"https://stormy-teal-panther.cyclic.app",
    withCredentials:true, // because we want to give the access token to the backend server
});
