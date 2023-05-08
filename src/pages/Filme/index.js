import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './filme-info.css';

import api from '../../Services/api';

function Filme(){

    // Obtém o parâmetro de rota contendo o ID do filme
    const { id } = useParams(); 

    // Define o estado do filme e de loading
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            // Faz uma requisição à API do TMDB buscando o filme pelo ID
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: '689d6c2e5f0a5e5187dc23b26f775e43',
                }
            })
            .then((response)=>{
                // Define o estado do filme com os dados retornados pela API
                setFilme(response.data);
                // Define o estado de loading como false
                setLoading(false);
            })
            .catch(()=>{
                console.log('Filme não encontrado.')
            })
        }

        // Chama a função para carregar o filme ao montar o componente
        loadFilme();

        // Função de limpeza que é chamada ao desmontar o componente
        return()=>{
            console.log('Componente foi desmontado');
        }
    }, []);

    if (loading) {
        // Se ainda estiver carregando, exibe uma mensagem de loading
        return(
            <div className="filme-info">
                <h1>Carregando Filme...</h1>
            </div>
        );
    }

    // Quando o filme estiver carregado, exibe suas informações
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}                
                alt={filme.title}
            />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="#">Trailer</a>
                </button>
            </div>
        </div>
    );
}

export default Filme;
