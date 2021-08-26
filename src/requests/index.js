import axios from "axios";

const BACK_URL = "http://localhost:5050";
const Transaction_URL = "";
const CRM_URL = "";
const Rates_URL = "";

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

export const payPalDeposit = ({ total, leadID }) => {
  return axios({
    method: "post",
    baseURL: "https://localhost:5050",
    url: "/api/PayPal/checkout",
    params: {
      total,
      leadID,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const transStoreDeposit = ({ transaction }) => {
  return axios({
    method: "post",
    baseURL: "https://localhost:5050",
    url: "/api/PayPal/checkout",
    params: {
      transaction,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllCurrencyTransactionsHistory = (leadID) => {
  return axios({
    method: "get",
    baseURL: Transaction_URL,
    url: "/api/Transaction/leadID",
    params: {
      leadID: leadID,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllStockTransactionsHistory = (leadID) => {
  return axios({
    method: "get",
    baseURL: Transaction_URL,
    url: "/api/StockTransaction/leadID",
    params: {
      leadID: leadID,
    },
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

export const getAllWallets = (leadID) => {
  return axios({
    method: "get",
    baseURL: Transaction_URL,
    url: "/api/wallet/leadID",
    params: {
      leadID: leadID,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUSDWalletAmount = (leadID) => {
  return axios({
    method: "get",
    baseURL: Transaction_URL,
    url: `/api/wallet/USD/${leadID}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getRateByCurrencyCode = (code) => {
  return axios({
    method: "get",
    baseURL: Rates_URL,
    url: "/api/CurrencyRates/code",
    params: {
      code,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getAllOperationTypes = () => {
  return axios({
    method: "get",
    baseURL: Transaction_URL,
    url: "/api/OperationType",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTotalWalletsBalance = (leadID) => {
  return axios({
    method: "get",
    baseURL: Transaction_URL,
    url: `/api/Balance/wallets/leadID`,
    params:{
      leadID,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
};