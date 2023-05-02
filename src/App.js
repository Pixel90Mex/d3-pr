import React, { useState, useEffect } from 'react';
import Home from './pages/Home'

//faccio la chiamata per ottenere le informazioni riguardanti i libri da passare alla Home

function App() {

  const [books, setBooks] = useState([]); //dato che sarà un array di libri, inserisco un array vuoto
  const [test, setTest] = useState(false);

  const toggleTest = () => setTest(!test);

console.log(books);
  const getBooks = async () => {
    try {
      const data = await fetch('https://epibooks.onrender.com/')//prendo i dati
      const response = await data.json()//li trasformo in json
      setBooks(response)//li passo allo stato --> books contiene response
    } catch (error) {
      console.log(error)
    }
  }

  //sintassi generica useEffect
  //serve ad eseguire funzioni durante un ciclo di vita di un componente
  //quando viene montato, aggiornato e smontato (lifecycle)
  useEffect(() => {
    //montato
    getBooks()
    
    //smontato quando viene cambiata la pagina --> ciclo finale di vita
    return() => {
      console.log('ciao');
    }
  },[test])//aggiornamento, quando modifichiamo props e stati array delle dipendenze --> aggiornamento

  return (
    <>
    <button onClick={toggleTest}>test</button>
    <Home 
    books={books}
    />
    </>
  );
}

export default App;
