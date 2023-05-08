//Base da URL:https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=689d6c2e5f0a5e5187dc23b26f775e43

import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;

/*
Este código pode ser utilizado para fazer requisições 
à API de filmes do The Movie Database (TMDb). 
O axios é uma biblioteca para fazer requisições HTTP, 
e a instância api criada já possui a base da URL da 
API definida. Dessa forma, para fazer uma requisição 
para a API de filmes, basta usar o método get do axios 
passando como parâmetro a URL da API específica que 
se deseja consultar.
*/