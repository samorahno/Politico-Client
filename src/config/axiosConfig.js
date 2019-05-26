import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://samson-politico.herokuapp.com/api/v1'
});

export default instance;
