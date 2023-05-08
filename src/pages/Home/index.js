import {useEffect, useState} from 'react';
import api from '../../Services/api';

// Define a URL da API que será chamada
// /movie/now_playing?api_key=689d6c2e5f0a5e5187dc23b26f775e43
function Home(){
    // Define um estado para guardar os filmes
    const [filmes, setFilmes] = useState([]);

    // Executa a função loadFilmes() quando o componente é montado
    useEffect(()=>{
        async function loadFilmes(){
            // Faz uma requisição à API e guarda a resposta no estado filmes
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:'689d6c2e5f0a5e5187dc23b26f775e43',
                    page: 1,
                }
            });

            console.log(response.data.results); // Retorna os filmes no console
        }

        loadFilmes(); // Chama a função para buscar os filmes ao montar o componente
    }, []);

    // Renderiza a página
    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
