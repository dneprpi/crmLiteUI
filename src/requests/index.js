import axios from "axios";

const BACK_URL = 'http://localhost:1234';

export const registerUser = data => {
    return axios({
        method: 'post',
        baseURL: BACK_URL,
        url: '/api/Auth/registration',
        headers: {
            'Content-Type': 'application/json'
                // "Access-Control-Allow-Origin": "*"
        },
        data
    });
}

export const singInUser = data => {
    return axios({
        method: 'post',
        baseURL: BACK_URL,
        url: '/api/Auth/login',
        headers: {
            'Content-Type': 'application/json'
                // "Access-Control-Allow-Origin": "*"
        },
        data
    });
}