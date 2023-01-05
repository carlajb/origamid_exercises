import React from 'react';
import Input from './Form_input/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      {nome}
      <Input label="Nome" value={nome} setValue={setNome} required />
      {email}
      <Input label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
