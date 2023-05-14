import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    // Filtra os filmes cujo ID é diferente do ID passado como parâmetro
    let filtroFilmes = filmes.filter((item) => {
      return(item.id !== id)
    });
  
    // Atualiza o estado "filmes" com o novo array filtrado e salva no localStorage
    setFilmes(filtroFilmes);
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
  }
  
  return (
    <div className='meus-filmes'>
      <h1>Meus filmes favoritos</h1>
  
      {/* Renderiza um texto se não houver filmes na lista */}
      {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}
  
      <ul>
        {/* Mapeia cada item do array "filmes" e renderiza um elemento <li> com o título do filme */}
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
  
                {/* Cria um botão para excluir o filme da lista, que chama a função "excluirFilme" */}
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
  
}

export default Favoritos;
