
const { response, request } = require('express');
const { searchPokemonByType,
    pokemonsVariousTypes,
    searchPokemonByName,
    searchPokemonById,
    searchVariousPokemons} = require('../helpers/pokemonApi');
const { charactersLowerCase,
    charactersCapital,
    consecutiveLetters,
    minNumber,
    numbersConsecutive,
    noSpaces,
    noZero,
    characterSpecials} = require('../helpers/passwordValidations');

const exerciseOne = (req = request, res = response) => {

    try {
        const { x, y } = req.body;

        result = x / (1 / y)

        res.status(200).json({ result: result });

    } catch (error) {

        res.status(500).json({ error: error });

    }

}

const exerciseTwo = async (req = request, res = response) => { 

    if (req.method === 'POST') { 
        
        try {

            const { id, type } = req.body;
            let count = false;
            const pokemon = await searchPokemonById(id);

            pokemon.types.forEach(element => {

                if (element.type.name == type) {

                    count = true;

                }

            });
        
            if (count) { 
                return res.status(200).json({ result: true });
            } else {
                return res.status(202).json({ result: false });
            }

        } catch (error) {
                
            res.status(500).json({ error: error });
    
        }

    }else if (req.method === 'GET') {

        const { type = null, name = null, number = null } = req.query;

        if (type !== null) {

            let arr = type.split('-');

            if (arr.length > 1) {

                const pokemons = await pokemonsVariousTypes(arr);

                return res.status(202).json({ pokemons });

            }

            const totalPokemons = await searchPokemonByType(type);

            return res.status(202).json({ pokemons: totalPokemons });

        }

        if (name !== null) {

            const idPokemon = await searchPokemonByName(name);

            return res.status(200).json({ number: idPokemon });

        }
    }
}
const exerciseTwoOrder =async (req = request, res = response) => { 

    const { id, order } = req.body;
    
    const pokemons =await searchVariousPokemons(id,order);

    res.status(200).json({ pokemons });


}

const exerciseTwoId = async(req = request, res = response) => {
    
    const { id } = req.params;
    
    try {
        const pokemon = await searchPokemonById(id);

        const stats = pokemon.stats;

        res.status(200).json(stats);

    }catch (error) {
        res.status(500).json({ error: error });
    }

}



const exerciseThree = (req = request, res = response) => { 
    
    const data = {};

    const { password } = req.body;

    data.charactersLength = password.length >= 16 ? true : false;
    
    data.charactersLower = charactersLowerCase(password);

    data.charactersCap = charactersCapital(password);

    data.consecutiveLett = consecutiveLetters(password);

    data.minimunNumbers = minNumber(password);
    
    data.numberConsecutives = numbersConsecutive(password);

    data.spaces = noSpaces(password);

    data.zero = noZero(password);

    data.characteresSpecial = characterSpecials(password);

    res.status(200).json(data);

}


const exerciseFour = (req = request, res = response) => {

    const { array: array } = req.body;
    
    let data = {};

    data.numberElements = array.length;
    
    data.percentageEvenNumbers = (array.filter((number) => number % 2 === 0).length / array.length) * 100;

    data.percentageOddNumbers = 100 - data.percentageEvenNumbers;

    data.percentageOverOneThousand = (array.filter((number) => number > 1000).length / array.length) * 100;

    data.numberMax = Math.max(...array);
    data.numberMin = Math.min(...array);

    data.indicators = {
        numberMax: data.numberMax,
        numberMin: data.numberMin,
        percentageMinNumber: (data.numberMin / data.numberMax) * 100, 
        percentageAverage: ((array.reduce((a, b) => a + b, 0) / data.numberElements) * 100) / data.numberMax
    }

    return res.status(200).json( data );

}

module.exports = {

    exerciseOne,
    exerciseTwo,
    exerciseThree,
    exerciseFour,
    exerciseTwoId,
    exerciseTwoOrder

}
