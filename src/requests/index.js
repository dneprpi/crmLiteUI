import axios from "axios";

const CRM_URL = "http://localhost:1234";
const Transaction_URL = "https://localhost:5050";
const Rates_URL = "http://localhost:80";

export const registerLead = (data) => {
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

export const singInLead = (data) => {
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

export const payPalDeposit = ({ total, leadID }) => {
  return axios({
    method: "post",
    baseURL: Transaction_URL,
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
    baseURL: Transaction_URL,
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

