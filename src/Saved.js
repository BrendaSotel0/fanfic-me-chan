import React from "react";
import SavedQuoteCard from "./SavedQuoteCard";

const Saved = ({savedQuotes}) => {

  const quoteCard = savedQuotes.map(quote => {

    return (
     <SavedQuoteCard 
      anime={quote.anime}
      character={quote.character}
      quote={quote.quote}
      key={Date.now()}
     />
    )
  })

  return (
    <div className="quote-card">
      {quoteCard}
    </div>
  )

}

export default Saved;