import React from "react";
import "./style.css";

function Col(props) {
  // const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return <div className="w3-col m8 w3-panel">{props.children}</div>;
}

export default Col;

