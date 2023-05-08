import { useEffect, useState } from 'react'; //importa o hook useEffect e useState do React
import api from '../../Services/api'; //importa o módulo que lida com a API
import { Link } from 'react-router-dom'; //importa o componente Link do React Router
import './home.css'; //importa o arquivo CSS

// URL da API: /movie/now_playing?api_key=689d6c2e5f0a5e5187dc23b26f775e43
function Home() {
  const [filmes, setFilmes] = useState([]); //inicializa o estado filmes com um array vazio

  useEffect(() => {
    async function loadFilmes() { //declaração da função assíncrona
      const response = await api.get('movie/now_playing', { //chamada da API para obter os filmes em cartaz
        params: {
          api_key: '689d6c2e5f0a5e5187dc23b26f775e43',
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 10)); //atualiza o estado filmes com os 10 primeiros resultados
    }

    loadFilmes(); //chama a função loadFilmes
  }, []); //indica que o efeito só deve ser executado uma vez, no momento da montagem do componente

  return (
    <div className='container'> {/* container para envolver os elementos da página */}
      <div className='lista-filmes'> {/* envolve a lista de filmes */}
        {filmes.map((filme) => { //mapeia cada filme no array de filmes
          return (
            <article key={filme.id}> {/* componente de artigo para exibir cada filme */}
              <strong>{filme.title}</strong> {/* exibe o título do filme */}
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} //URL para exibir o poster do filme
                alt={filme.title} //texto alternativo para o poster
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link> {/* cria um link para a página de detalhes do filme */}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
