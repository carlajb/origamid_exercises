import React from 'react';
import Produto from '../useState/Produto';

// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook

// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    // console.log(response);
    const json = await response.json();
    setDados(json);
    setCarregando(false);
    console.log(json);
  }
  return (
    <div>
      <button style={{ margin: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '1rem' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '1rem' }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Caregando ...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
