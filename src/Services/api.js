//Base da URL:https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=689d6c2e5f0a5e5187dc23b26f775e43

import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;