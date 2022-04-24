import React from "react";
import PropTypes from "prop-types";
import "./SavedQuoteCard.css";

const SavedQuoteCard = ({ anime, character, quote }) => {
  return (
    <div className="saved-quote-card">
      <h1>Anime</h1>
      <h6>{anime}</h6>
      <h1>Character</h1>
      <h6>{character}</h6>
      <h1>Quote</h1>
      <h6>{quote}</h6>
    </div>
  );
};

export default SavedQuoteCard;

SavedQuoteCard.propTypes = {
  anime: PropTypes.string,
  character: PropTypes.string,
  quote: PropTypes.string,
};
