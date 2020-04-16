import React, { Fragment } from "react";
import Card from "../Card";
import Input from "../Input/index";
import { mockData } from "../../mockData";
import "./style.css";

const CardStack = () => {
  return (
    <Fragment>
      <Input />
      <div className="row row-cols-1 row-cols-md-4">
        {mockData.map((data) => {
          return (
            <div className="col">
              <Card data={data} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CardStack;
