import React from 'react';
import Header from './exercicioDeComponents/Header';
import Home from './exercicioDeComponents/Home';
import Produtos from './exercicioDeComponents/Produtos';

const App = () => {
  const { pathname } = window.location;

  let Pagina;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }
  return (
    <div>
      <Header />
      <Pagina />
    </div>
  );
};

export default App;
