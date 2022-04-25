import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import quoteData from "./APIcalls";
import AsideNav from "./AsideNav";
import Load from "./Load";
import Quote from "./Quote";
import Saved from "./Saved";
import ErrorHandling from "./ErrorHandling";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: {},
      savedQuotes: [],
      error: "",
    };
  }

  fetchData = () => {
    return quoteData()
      .then((data) => {
        this.setState({ quote: data });
      })
      .catch((error) =>
        this.setState({ error: `Oops! Something went wrong!` })
      );
  };

  addQuote = (newQuote) => {
    const isFound = this.state.savedQuotes.find(
      (targetQuote) => targetQuote.quote === newQuote.quote
    );

    if (!isFound) {
      this.setState({ savedQuotes: [...this.state.savedQuotes, newQuote] });
    }
  };

  render() {
    return (
      <main className="App">
        <p>FanFic Me Chan</p>
        <div className="container">
          <AsideNav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Load fetchData={this.fetchData} />}
            />
            <Route
              exact
              path="/random-quote"
              render={() => (
                <Quote quote={this.state.quote} addQuote={this.addQuote} />
              )}
            />
            <Route
              exact
              path="/saved"
              render={() => <Saved savedQuotes={this.state.savedQuotes} />}
            />
            <Route render={() => <ErrorHandling />} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
