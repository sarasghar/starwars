import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Filter from "../Toolbar/Filter/Filter";
import Search from "../Toolbar/Search/Search";

const toolbar = props => (
  <Aux>
    <Filter />
    <Search />
  </Aux>
);
export default toolbar;
