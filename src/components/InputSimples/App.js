import React from 'react';

const App = () => {
  const [comentario, setComentario] = React.useState([]);
  const [input, setInput] = React.useState('');
  const imputElement = React.useRef();

  function handleClick() {
    setComentario([...comentario, input]);
    setInput('');
    imputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentario.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={imputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>enviar</button>
    </div>
  );
};

export default App;
