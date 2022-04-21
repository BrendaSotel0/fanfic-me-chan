import React from "react";
import { Route, Link } from "react-router-dom";

const Load = ({fetchData}) => {
  return (
    <div className="random-quote">
      <Link to="/random-quote">
        <button className="click-for-quote"
          onClick={() => fetchData()}>Quote
        </button>
      </Link>
    </div>
  )
}

export default Load;