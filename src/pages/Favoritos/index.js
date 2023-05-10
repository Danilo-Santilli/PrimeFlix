import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos() {

  // Define o estado "filmes" como um array vazio inicialmente.
  const [filmes, setFilmes] = useState([]);

  // Utiliza o hook useEffect para obter a lista de filmes salvos no localStorage
  // assim que o componente é montado.
  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  return (
    <div className='meus-filmes'>
      <h1>Meus filmes favoritos</h1>
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                {/* Cria um link para a página de detalhes do filme, utilizando o
                    ID do filme como parâmetro */}
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
