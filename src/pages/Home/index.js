import { useEffect, useState } from 'react';
import api from '../../Services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  // Define o estado dos filmes e inicializa como um array vazio.
  const [filmes, setFilmes] = useState([]);
  // Define o estado de loading e inicializa como true.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      // Faz a requisição dos filmes em cartaz usando a api criada anteriormente.
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '689d6c2e5f0a5e5187dc23b26f775e43',
          page: 1,
        },
      });

      // Atualiza o estado de filmes com os dados obtidos na requisição e filtra os 10 primeiros resultados.
      setFilmes(response.data.results.slice(0, 10));
      // Muda o estado de loading para false para indicar que a requisição terminou de ser carregada.
      setLoading(false);
    }

    loadFilmes();
  }, []);

  // Verifica se ainda está carregando os filmes, caso sim, exibe uma mensagem.
  if (loading) {
    return(
        <div className='loading'>
            <h2>Carregando filmes...</h2>
        </div>
    );
  }

  // Caso contrário, renderiza a lista de filmes.
  return (
    <div className='container'>
      <div className='lista-filmes'>
        {filmes.map((filme) => { 
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
