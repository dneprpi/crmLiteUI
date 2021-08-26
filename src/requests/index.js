import axios from "axios";

const BACK_URL = "http://localhost:5050";

export const registerLead = (data) => {
  return axios({
    method: "post",
    baseURL: BACK_URL,
    url: "/api/Auth/registration",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
};

export const singInUser = (data) => {
  return axios({
    method: "post",
    baseURL: BACK_URL,
    url: "/api/Auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
};

export const paginationLead = (currentPage) => {
  return axios({
    method: "get",
    baseURL: BACK_URL,
    url: "/api/Lead/pagination",
    params: currentPage,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUser = (leadID) => {
  return axios({
    method: "get",
    baseURL: BACK_URL,
    url: "/api/lead/" + leadID,
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*"
    },
  });
};
