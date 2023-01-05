import React from 'react';
import Input from './Form_input/Input';
import useForm from './useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  //console.log(cep);
  console.log(email);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('enviou');
    } else {
      console.log('Não enviar');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Cep"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <Input label="Email" id="email" type="email" {...email} />
      <Input
        label="Nome"
        id="nome"
        type="text"
        placeholder="Preencha seu nome"
        {...nome}
      />
      <button>Enviar</button>
    </form>
  );
};
export default App;
