import React from 'react';
import useLocalStorage from './CustomHooks/useLocalStorage';
import useFetch from './CustomHooks/useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response);
    }
    fetchData();
  }, [request]);
  //console.log(data);
  if (error) return <p>{error}</p>;

  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Preferido: {produto}</p>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Tablet</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else {
    return null;
  }
};
export default App;
