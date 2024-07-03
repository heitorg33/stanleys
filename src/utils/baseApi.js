const axios = require("axios");
require("dotenv").config();

const TOKEN = process.env.TOKEN_STANLEYS;
const baseApi = axios.create({
  baseURL: "https://api.hubapi.com/",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

module.exports = { baseApi };
