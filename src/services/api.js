const axios = require("axios");

const api = axios.create({
  baseURL: "https://br1.api.riotgames.com/lol/"
});

module.exports = api;
