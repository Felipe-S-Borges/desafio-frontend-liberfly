import axios from 'axios'

const api = axios.create({
    baseURL:'https://gateway.marvel.com/v1/public',
    params:{
        apikey: 'e74120131a03fefccff26a61ac2ed0d3',
        hash: 'd904f17f77333692bf212ccfe5beeca4',
        ts: '23152'
    }
})

export default {
    getCharacters() {
        return api.get('/characters')
    }
}