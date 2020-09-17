import React from "react";
import classes from "./Filter.css";

const filter = props => {
  return (
    <div>
      <div className={classes.dropdown}>
        <span>Mouse over me</span>
        <div className={classes.dropdownContent}>
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
        </div>
      </div>
    </div>
  );
};

export default filter;
