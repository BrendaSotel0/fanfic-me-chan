import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import quoteData from "./APIcalls";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      error: '',
      hasError: false,
    };
  }

  componentDidMount = () => {
    return quoteData()
      .then((data) => this.setState({ quotes: data }))
      .catch((error) =>
        this.setState({ hasError: true, error: `Oops! Something went wrong!` })
      );
  };

  //  fetchData = () => {
  //   return fetch('https://animechan.vercel.app/api/random')
  //   .then(response => response.json())
  //   .then(quote => console.log(quote))
  // }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => {this.componentDidMount()}}>CLICK</button>
        </header>
      </div>
    );
  }
}

export default App;
