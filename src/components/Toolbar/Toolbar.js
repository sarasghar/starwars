import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Filter from "../Toolbar/Filter/Filter";
import Search from "../Toolbar/Search/Search";
import classes from "./Toolbar.css";

const toolbar = props => (
  <Aux>
    <div className={classes.Toolbar}>
      <div className={classes.Toolbar_container}>
        <div className={classes.Filter}>
          <Filter />
        </div>
        <div className={classes.Search}>
          <Search />
        </div>
      </div>
    </div>
  </Aux>
);
export default toolbar;
