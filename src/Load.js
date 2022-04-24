import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Load.css";

const Load = ({fetchData}) => {
  return (
    <div className="random-quote">
      <Link to="/random-quote">
        <button className="click-for-quote"
          onClick={() => fetchData()}>New Quote
        </button>
      </Link>
    </div>
  )
}

export default Load;

Load.propTypes = {
  fetchData: PropTypes.func
}