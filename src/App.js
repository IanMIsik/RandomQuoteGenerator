import './App.css';

import {useEffect, useState} from 'react'; 



function App() {

  const [quotes, setQuotes] = useState([]); 
  const [quote, setQuote] = useState(null); 


  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json); 
        setQuote(json[0]); 
      })
  }, [])

  function getRandomQuote(quotes){

    return quotes[Math.floor(Math.random() * quotes.length)]; 

  }

  function getNewQuote(){ 
    setQuote(getRandomQuote(quotes))
  }




  return (

    <main>
    <h1>Project 3: Quote Generator</h1>
    <section>
      <button onClick={getNewQuote}>New Quote</button>
      <h3>
        <span>"</span>
        {quote?.text}
      </h3>
      <i>- {quote?.author}</i>
    </section>

    </main>


  );
}

export default App;
