import React from 'react';
import Checkbox from './Form_input/Checkbox';
import Input from './Form_input/Input';
import Radio from './Form_input/Radio';
import Select from './Form_input/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagem, setLinguagem] = React.useState([]);
  const [termo, setTermo] = React.useState([]);

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Aceito os termos']}
        value={termo}
        setValue={setTermo}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagem}
        setValue={setLinguagem}
      />
      {linguagem}
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Morango', 'Abacaxi', 'Limao']}
        value={frutas}
        setValue={setFrutas}
      />
      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input label="Nome" value={nome} setValue={setNome} required />
      <Input label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
