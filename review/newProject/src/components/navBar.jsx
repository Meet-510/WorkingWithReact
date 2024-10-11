import React from "react";

const navBar = (props) => {
  return (
    <div className="java">
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default navBar;
