import axios from 'axios';

const Api = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie',
  params:{
    api_key:'80a40e211404d8a3420f6cd3e67455af',
    language:'en-US',
  }
})

export default Api;