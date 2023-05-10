import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';

import api from '../../Services/api';

function Filme(){

    const { id } = useParams(); 
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: '689d6c2e5f0a5e5187dc23b26f775e43',
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('Filme não encontrado.');
                navigate('/', {replace:true});
                return;
            })
        }

        loadFilme();

        return()=>{
            console.log('Componente foi desmontado');
        }
    }, [navigate, id]);

    function salvarFilme() {
        // Obtém o valor armazenado no localStorage sob a chave "@primeflix"
        const minhaLista = localStorage.getItem("@primeflix");
      
        // Inicializa a variável "filmesSalvos" com o valor recuperado do localStorage,
        // utilizando JSON.parse para transformar a string em um objeto JS.
        // Caso não haja valor armazenado no localStorage, a variável é inicializada
        // com um array vazio.
        let filmesSalvos = JSON.parse(minhaLista) || [];
      
        // Verifica se o filme já está salvo na lista de filmes salvos.
        // A função some é utilizada para verificar se há algum elemento do array
        // que satisfaz a condição passada como argumento (no caso, se o id do filme
        // atual é igual ao id de algum dos filmes salvos na lista).
        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);
      
        // Se o filme já está salvo na lista, exibe um alerta informando e interrompe
        // a execução da função.
        if (hasFilme) {
          alert('Esse filme já está na lista!');
          return;
        }
      
        // Se o filme não está salvo na lista, adiciona-o ao array de filmes salvos.
        filmesSalvos.push(filme);
      
        // Armazena o array atualizado de filmes salvos no localStorage,
        // utilizando JSON.stringify para transformar o objeto JS em uma string.
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
      
        // Exibe um alerta informando que o filme foi salvo com sucesso.
        alert("Filme salvo!");
      }
      

    if (loading) {
        return(
            <div className="filme-info">
                <h1>Carregando Filme...</h1>
            </div>
        );
    }

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
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external noreferrer" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    );
}

export default Filme;
