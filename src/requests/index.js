import axios from "axios";

const TS_URL = "https://crmlite-transaction-store.azurewebsites.net";
const CRM_URL = "https://crmlite-leads-service.azurewebsites.net";
const RATES_URL = "https://crmlite-rates.azurewebsites.net";
const RATESSERVICE_URL = "https://crmlite-rates-service.azurewebsites.net";

export const registerLead = (data) => {
  return axios({
    method: "post",
    baseURL: CRM_URL,
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
    baseURL: CRM_URL,
    url: "/api/Auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
};

export const getQRcode = (leadID) => {
  return axios({
    method: "get",
    baseURL: TS_URL,
    url: "/api/TFA/model",
    params: { leadID: leadID },
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const connectTFAToLead = (pin, leadID) => {
  return axios({
    method: "post",
    baseURL: TS_URL,
    url: "/api/TFA",
    params: { pin: pin, leadID: leadID },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const paginationLead = (currentPage) => {
  return axios({
    method: "get",
    baseURL: CRM_URL,
    url: "/api/Lead/pagination",
    params: currentPage,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUser = (leadID, token) => {
  return axios({
    method: "get",
    baseURL: CRM_URL,
    url: "/api/lead/" + leadID,
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + token
    },
  });
};
