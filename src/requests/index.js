import axios from "axios";

const CRM_URL = "http://localhost:1234";
const Transaction_URL = "http://localhost:5050";

export const registerUser = (data) => {
  return axios({
    method: "post",
    baseURL: CRM_URL,
    url: "/api/Auth/registration",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*"
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
      // "Access-Control-Allow-Origin": "*"
    },
    data,
  });
};

export const payPalDeposit = ({total, leadID}) => {
  return axios({
    method: "post",
    baseURL: Transaction_URL,
    url: "/api/PayPal/checkout",
    params:{
        total,
        leadID
    },
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*"
    },
  });
};

export const getAllCurrencyTransactionsHistory = (leadID) => {
    return axios({
        method: "get",
        baseURL: Transaction_URL,
        url: "/api/Transaction/leadID",
        params:{
            "leadID": leadID
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
};

export const getAllStockTransactionsHistory = (leadID) => {
    return axios({
        method: "get",
        baseURL: Transaction_URL,
        url: "/api/StockTransaction/leadID",
        params:{
            "leadID": leadID
        },
        headers: {
          "Content-Type": "application/json"
        }
      });
  };
