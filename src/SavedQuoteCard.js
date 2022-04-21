import React from "react";

const SavedQuoteCard = ({anime, character, quote}) => {
    return (
    <div className="saved-quote-card">
      <p>Anime: {anime}</p>
      <p>Character: {character}</p>
      <p>Quote: {quote}</p>
    </div>
  )
}

export default SavedQuoteCard