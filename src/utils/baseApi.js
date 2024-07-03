const axios = require("axios");
require("dotenv").config();

const TOKEN = process.env.TOKEN_STANLEYS;
const TOKEN_KINKBOX = process.env.TOKEN_KINKBOX;

const baseApi = axios.create({
  baseURL: "https://api.hubapi.com/",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
  },
});

const baseKinkBox = axios.create({
  baseURL: " https://api-v1.kinbox.com.br/api/v2/channels/get-whatsapp",
  headers: {
    Authorization: `Bearer ${TOKEN_KINKBOX}`,
    "Content-Type": "application/json",
  },
});
module.exports = { baseApi, baseKinkBox };
