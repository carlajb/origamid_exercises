import React from 'react';
import Titulo from './Titulo';
import Produto from './produto';

const produto = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      <section>
        {produto.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </section>
    </section>
  );
};
export default Produtos;
