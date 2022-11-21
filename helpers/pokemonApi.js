
const { pokemonApi } = require('../services/summoner');

const searchPokemonByType = async (type) => {


    const pokemons = await pokemonApi.get(`type/${type}`)
        
        .then((response) => { 

            const totalPokemons = response.data.pokemon.length;

            return totalPokemons 

        })
        .catch((error) => {
            
            return error
    
        });
    
    return pokemons;
    
}

const pokemonsVariousTypes = async (types) => {

    const pokemonsTypeOne = await pokemonApi.get(`type/${types[0]}`)
        
        .then((response) => {

            const totalPokemons = response.data.pokemon

            return totalPokemons

        })
        .catch((error) => {
            
            return error
    
        });
    
    const pokemonsTypeTwo = await pokemonApi.get(`type/${types[1]}`)
        .then((response) => {

            const totalPokemons = response.data.pokemon

            return totalPokemons

        })
        .catch((error) => {

            return error

        });
        
    let pokemons = [];


    for (var i in pokemonsTypeOne) {

        for (var j in pokemonsTypeTwo) {

            if (pokemonsTypeOne[i].pokemon.name == pokemonsTypeTwo[j].pokemon.name) {
                
                pokemons.push(pokemonsTypeTwo[j]);

            } 

        }

    };
    return pokemons;
}

const searchPokemonByName = async (name) => {

    const idPokemon = await pokemonApi.get(`pokemon/${name}`)
        
        .then((response) => {

            const id = response.data.id;

            return id

        })
        .catch((error) => {


            return error

        });

    return idPokemon;


}


const searchPokemonById = async (id) => {

    const pokemon = await pokemonApi.get(`pokemon/${id}`)
        
        .then((response) => {

            const pokemon = response.data;

            return pokemon

        })
        .catch((error) => {
            return error;
        });
    
    return pokemon;

}


const searchVariousPokemons = async (id,order) => { 
    
    let pokemons = [];


    for (var i in id) {

        const pokemon = await searchPokemonById(id[i]);
        
        let data = {}
        data[order[0]] = pokemon[order[0]];
        data[order[1]]= pokemon[order[1]];
        data[order[2]] = pokemon[order[2]];
        pokemons.push(data);

    };

    return pokemons;
}

module.exports = {
    searchPokemonByType,
    pokemonsVariousTypes,
    searchPokemonByName,
    searchPokemonById,
    searchVariousPokemons
    
}