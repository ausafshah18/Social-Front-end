import axios from "axios"

export const makeRequest = axios.create({
    baseURL:"http://localhost:8800/api/",
    withCredentials:true, // because we want to give the access token to the backend server
});