const axios = require('axios');

const pokemonApi = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

module.exports = { pokemonApi };