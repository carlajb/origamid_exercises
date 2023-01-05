import React from 'react';
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }
  console.log(cores);
  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input
            type="checkbox"
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default App;

// const [termos, setTermos] = React.useState(false);
// return (
//   <form>
//     {termos && <p>aceitou os termos</p>}
//     <label>
//       <input
//         type="checkbox"
//         value="termo"
//         checked={termos}
//         onChange={({ target }) => setTermos(target.checked)}
//       />
//       Aceito os termos
//     </label>
//   </form>
// );

// ==============
// <label>
// <input
//   type="checkbox"
//   value="rosa"
//   checked={cores.includes('rosa')}
//   onChange={handleChange}
// />
// Rosa
// </label>
// <label>
// <input
//   type="checkbox"
//   value="azul"
//   checked={cores.includes('azul')}
//   onChange={handleChange}
// />
// Azul
// </label>
// <label>
// <input
//   type="checkbox"
//   value="preto"
//   checked={cores.includes('preto')}
//   onChange={handleChange}
// />
// Preto
// </label>
