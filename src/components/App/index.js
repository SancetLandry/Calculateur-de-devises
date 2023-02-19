// == Import
import { useState } from 'react';
import './styles.scss';
import array from 'src/data/currencies.js';

// == Composant
function App() {
  // state (état, données)

  const [currencies, setCurrencies] = useState(
    array,
  );

  const [selectedCurrency, setSelectedCurrency] = useState('British Pound');
  const [convertedAmount, setConvertedAmount] = useState('0.85');

  const [inputValue, setInputValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  // comportements

  const handleMaj = (event) => {
    const e = event.target.textContent;
    const selected = currencies.find((currency) => currency.name === e);
    setSelectedCurrency(selected.name);
    setConvertedAmount(selected.rate.toFixed(2));
  };

  const handleNumber = (event) => {
    console.log(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = parseFloat(inputValue);
    const selected = currencies.find((currency) => currency.name === selectedCurrency);
    const converted = amount * selected.rate;
    setConvertedAmount(converted.toFixed(2));
    setTitleValue(amount);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // affichage (render)

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__header">
          <h1 className="app__header__titleh1">Converter</h1>
          <p className="app__header__titlep" onDoubleClick={handleNumber}>{titleValue} euro</p>
          <form onSubmit={handleSubmit}>
            <input className="app__header__input" onChange={handleChange} type="number" name="amount" value={inputValue} />
            <button className="app__header__button" type="submit">Convertir</button>
          </form>
        </div>
        <div className="app__list">
          <div className="app__list__title"><p className="app__list__title__padding">Currencies</p></div>
          <ul>

            {currencies.map((currencie) => (
              <li onClick={handleMaj} key={currencie.name} className="app__list__li"><p className="app__list__li__padding">{currencie.name}</p></li>
            ))}

          </ul>
        </div>
        <div className="app__footer">
          <h1 className="app__header__titleh1">{convertedAmount}</h1>
          <p className="app__header__titlep">{selectedCurrency}</p>
        </div>
      </div>

    </div>
  );
}

// == Export
export default App;
