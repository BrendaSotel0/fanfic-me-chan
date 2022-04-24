import React from "react";
import SavedQuoteCard from "./SavedQuoteCard";
import PropTypes from 'prop-types';
import "./Saved.css"

const Saved = ({savedQuotes}) => {

  const quoteCard = savedQuotes.map((quote, i) => {

    return (
      <div className="saved-section">
        <SavedQuoteCard 
         anime={quote.anime}
         character={quote.character}
         quote={quote.quote}
         key={i}
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

Saved.propTypes = {
  savedQuotes: PropTypes.array
}