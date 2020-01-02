const axios = require("axios");
const API_KEY = "RGAPI-9a06838c-3c12-4410-a7a1-416c01ba69b0";

const api = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/"
});

module.exports = api;
