import { BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {

  const fetchData = () => {
    return fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => fetchData()}>CLICK</button>
      </header>
    </div>
  );
}

export default App;
