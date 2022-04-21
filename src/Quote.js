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
      <p>Anime: {quote.anime}</p>
      <p>Character: {quote.character}</p>
      <p>Quote: {quote.quote}</p>
      <button className="save-quote" onClick={(event) => submitQuote(event)}>Save</button>
    </div>
  )
}

export default Quote;