import React from "react";
import "./search-bar.style.css";

export const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <input type="search" onChange={props.changer} placeholder={props.placeHolder}/>
    </div>
  );
};
