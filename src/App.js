import React from 'react';
import './index.scss';

function App() {

  const [password, setPassword] = React.useState('');
  const [length, setLength] = React.useState(10);
  const [includeUppecase, setIncludeUppercase] = React.useState(false);
  const [includeLowercase, setIncludeLowercase] = React.useState(false);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);
  const [includeSymbol, setIncludeSymbol] = React.useState(false);

  const generatePasswod = () => {
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allChars = '';
    if (includeUppecase) allChars += upperCaseChars;
    if (includeLowercase) allChars += lowerCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbol) allChars += symbolChars;

    let generatedPasswod = '';
    for (let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random()*allChars.length);
      generatedPasswod += allChars[randomIndex];
    }

    setPassword(generatedPasswod);
  } ;

  return (
    <div className="App">
      <span className="subtitle">Пароль:</span>
      <h2>{password}</h2>
      <div className="row">
        <span>Длина паролья:</span>
        <input 
          className="pwg-length" 
          type="number" 
          value={length}
          onChange={(e) => setLength(e.target.value)} 
        />
      </div>
      <div className="row">
        <span>Прописные буквы:</span>
        <input 
          className="styled-checkbox" 
          id="checkbox1" 
          type="checkbox"
          checked={includeUppecase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="checkbox1" />
      </div>
      <div className="row">
        <span>Строчные буквы:</span>
        <input
          className="styled-checkbox"
          id="checkbox2"
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="checkbox2" />
      </div>
      <div className="row">
        <span>Цифры:</span>
        <input 
          className="styled-checkbox" 
          id="checkbox3" 
          type="checkbox" 
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="checkbox3" />
      </div>
      <div className="row">
        <span>Символы:</span>
        <input 
          class="styled-checkbox" 
          id="checkbox4" 
          type="checkbox" 
          checked={includeSymbol}
          onChange={(e) => setIncludeSymbol(e.target.checked)} 
        />
        <label htmlFor="checkbox4" />
      </div>
      <button
        onClick={generatePasswod}
      >
        Сгенерировать
      </button>
    </div>
  );
}

export default App;
