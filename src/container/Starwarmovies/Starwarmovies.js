import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Toolbar from "../../components/Toolbar/Toolbar";
import MovieList from "../../components/MovieList/MovieList";
import MovieDescription from "../../components/MovieDescription/MovieDescription";

const starwarmovies = props => (
  <Aux>
    <h1>Star war movies MAIN container</h1>
    <Toolbar />
    <MovieList />
    <MovieDescription />
  </Aux>
);
export default starwarmovies;
