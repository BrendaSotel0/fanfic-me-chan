import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import quoteData from "./APIcalls";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      error: ''
    }
  }

  fetchData = () => {
    return quoteData()
      .then((data) => {
        console.log(data)
        this.setState({ quotes: data })}
      )
      .catch((error) =>
        this.setState({ error: `Oops! Something went wrong!` })
      )
  }

  //  addQuote = (newQuote) => {
  //   this.setState({quotes: [...this.state.quotes, newQuote]})
  // }
  
  render() {
    return (
      <main className="App">
        <h1>FanFic Me Chan</h1>
        <button onClick={() => {this.fetchData()}}>CLICK</button>
      </main>
    );
  }
}

export default App;
