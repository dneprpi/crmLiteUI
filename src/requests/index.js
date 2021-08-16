import axios from "axios";

const BACK_URL = 'http://localhost:1234';

export const registerUser = data => {
    // return fetch(`${BACK_URL}/api/Auth/registration`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body
    //     })
    //     .then(res => res.json());
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