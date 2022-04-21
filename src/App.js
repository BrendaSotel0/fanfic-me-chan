import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import quoteData from "./APIcalls";
import AsideNav from "./AsideNav";
import Load from "./Load";
import Quote from "./Quote";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: {},
      savedQuotes: [],
      error: ''
    }
  }

  fetchData = () => {
    return quoteData()
      .then((data) => {
        console.log(data)
        this.setState({ quote: data })}
      )
      .catch((error) =>
        this.setState({ error: `Oops! Something went wrong!` })
      )
  }

  addQuote = (newQuote) => {
    this.setState({savedQuotes: [...this.state.savedQuotes, newQuote]})
  }
  
  render() {
    return (
      <main className="App">
        <h1>FanFic Me Chan</h1>
        <AsideNav />
        <Route exact path="/" render={() => (<Load fetchData={this.fetchData} /> )} />
        <Route exact path="/random-quote" render={() => (<Quote quote={this.state.quote} addQuote={this.addQuote} savedQuotes={this.state.savedQuotes} />)} />
        {/* <button onClick={() => {this.fetchData()}}>New Quote</button> */}
      </main>
    );
  }
}

export default App;
