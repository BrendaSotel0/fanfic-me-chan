import React from "react";

const SavedQuoteCard = ({anime, character, quote}) => {
    return (
      <div className="saved-quote-card">       
        <h4>Anime</h4> 
        <h5>{anime}</h5>
        <h4>Character</h4> 
        <h5>{character}</h5>
        <h4>Quote</h4> 
        <h5>{quote}</h5>
      </div>
  )
}

export default SavedQuoteCard