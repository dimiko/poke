import axios from 'axios'

export const getPoke = () => {
    return axios ({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/`,
        contentType: 'application/json'
    })
}

export const getPokeSingle = (id) => {
    return axios ({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
        contentType: 'application/json'
    })
}





