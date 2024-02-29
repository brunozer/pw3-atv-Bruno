import cavernas from './livros/cavernas_aco.jpg';
import './css/App.css'; 
function App() {
  return (
<div className="container">
      <div className='cardBook'>
        <div className="contentWrapper">
          <img src={cavernas} className="imagemLivro" alt="capa livro as cavernas de-aço" />
          <div className="bookInfo">
            <h2 className='titulo'>As cavernas de aço</h2>
            <h3 className='autor'>Isaac Asimov</h3>
            <div className="separador"></div>
            <p className='descricao'>As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica.
            A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário,
            inclusive nos dramas policiais.</p>
            <p className='descricao'>
            A obra foi publicada, pela primeira vez, na revista Galaxy Science Fiction, e o sucesso foi tão grande que, um ano depois, se tornou livro.
            Na trama, Os Mundos Siderais, antigas colônias da Terra, possuem rígidas leis de imigração, e não aceitam mais terráqueos em seus planetas. 
            Para agravar a situação, os robôs estão substituindo grande parte da mão de obra trabalhadora na Terra, 
            levando os humanos a perderem seus empregos e privilégios de cidadãos.
            </p>
          </div>
        </div>
        <p className='paragrafoLivro'>passe o mouse sobre a imagem</p>
        <button className="botao">Ler amostra</button>
      </div>
    </div>
  );
}

export default App;
