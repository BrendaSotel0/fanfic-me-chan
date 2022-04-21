import React from "react";
import Saved from "./Saved";
import { Route, Link } from "react-router-dom";

const AsideNav = () => {
  return (
    <div className="aside-nav">
      <h3>
        Welcome to FanFic Me Chan, the muse for your next fanfic adventure!
      </h3> 
      <h3>
        To get started, simple click on 'New Quote' and you will be given a random quote to get your creative juices flowing.
      </h3>
      <button>Home</button>
      <Link to="/saved">
        <button className="saved-quotes"
          onClick={() => <Saved />}>Saved Quotes
        </button>
      </Link>
      {/* <button className="saved-quotes" onClick={() => <Saved />}>Saved Quotes</button> */}
    </div>
  )
}

export default AsideNav