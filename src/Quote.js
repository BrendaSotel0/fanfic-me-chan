import React from "react";

const Quote = ({quote}) => {
  return (
    <div className="quote-card">
      <p>Anime: {quote.anime}</p>
      <p>Character: {quote.character}</p>
      <p>Quote: {quote.quote}</p>
    </div>
  )
}

export default Quote;