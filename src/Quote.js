import React from "react";
import "./Quote.css"

const Quote = ({quote, addQuote, savedQuotes}) => {

  const submitQuote = (event) => {
    event.preventDefault()
    const newQuote = {
      anime: quote.anime,
      character: quote.character,
      quote: quote.quote
    }
    addQuote(newQuote)
  }

  return (
    <div className="quote-card">
      <section className="card-section">
        <h4>Anime</h4> 
        <h5>{quote.anime}</h5>
        <h4>Character</h4>
        <h5>{quote.character}</h5>
        <h4>Quote</h4>
        <h5>{quote.quote}</h5>
      </section>
      <div className="button-section">
        <button className="save-quote" onClick={(event) => submitQuote(event)}>Save</button>
      </div>
    </div>
  )
}

export default Quote;