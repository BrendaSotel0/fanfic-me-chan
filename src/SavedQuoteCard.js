import React from "react";
import "./SavedQuoteCard.css";

const SavedQuoteCard = ({anime, character, quote}) => {
    return (
      <div className="saved-quote-card">       
        <h7>Anime</h7> 
        <h6>{anime}</h6>
        <h7>Character</h7> 
        <h6>{character}</h6>
        <h7>Quote</h7> 
        <h6>{quote}</h6>
      </div>
  )
}

export default SavedQuoteCard