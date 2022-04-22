import React from "react";
import SavedQuoteCard from "./SavedQuoteCard";
import "./Saved.css"

const Saved = ({savedQuotes}) => {

  const quoteCard = savedQuotes.map(quote => {

    return (
      <div className="saved-section">
        <SavedQuoteCard 
         anime={quote.anime}
         character={quote.character}
         quote={quote.quote}
         key={Date.now()}
        />
      </div>
    )
  })

  return (
    <div className="saved-section-quote-card">
      {quoteCard}
    </div>
  )

}

export default Saved;