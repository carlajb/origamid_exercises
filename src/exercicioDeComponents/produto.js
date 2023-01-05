import React from 'react';

const produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem' }}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((produto) => (
          <li>{produto}</li>
        ))}
      </ul>
    </div>
  );
};

export default produto;
