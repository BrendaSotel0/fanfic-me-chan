import React from "react";
import Saved from "./Saved";
import Load from "./Load";
import { Link } from "react-router-dom";
import "./AsideNav.css";

const AsideNav = () => {
  return (
    <div className="aside-nav">
      <h3>
        Welcome to FanFic Me Chan, the muse for your next fanfic adventure!
      </h3> 
      <h3>
        To get started, simple click on 'New Quote' and you will be given a random quote to get your creative juices flowing.
      </h3>
      <Link to="/">
        <button className="home"
        onClick={() => <Load />}>Home</button>
      </Link>
      <Link to="/saved">
        <button className="saved-quotes"
          onClick={() => <Saved />}>Saved Quotes
        </button>
      </Link>
    </div>
  )
}

export default AsideNav