import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import MovieList from "../../components/MovieList/MovieList";
import MovieDescription from "../../components/MovieDescription/MovieDescription";

import classes from "./Starwarmovies.css";

const starwarmovies = props => (
  <Aux>
    <div className={classes.Starwarmovies_wrapper}>
      <Toolbar />
      <div className={classes.Starwarmovies_container}>
        <div>
          <MovieList />
        </div>
        <div>
          <MovieDescription />
        </div>
      </div>
    </div>
  </Aux>
);
export default starwarmovies;
