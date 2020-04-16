import React from "react";

import "./style.css";

const Title = (props) => {
  return (
    <div>
      <div className="table__header">
  <span className="table__heading">{props.heading}</span>
      </div>
      <div className="view__line"></div>
    </div>
  );
};

export default Title;
