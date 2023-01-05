import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }
  return (
    <form>
      <h2>Cores</h2>
      {cor}

      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'azul'}
          name="cor"
          value="azul"
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          checked={cor === 'vermelho'}
          name="cor"
          value="vermelho"
        />
        Vermelho
      </label>
      <h2>Produtos</h2>
      {produto}
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="notbook"
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          name="produto"
          value="smartphone"
        />
        Smartphone
      </label>
    </form>
  );
};

export default App;
