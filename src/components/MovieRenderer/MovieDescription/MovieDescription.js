import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./MovieDescription.css";

const moviedescription = props => {
  //component for displaying movie details in right panel
  if (props.filmName.length > 0) {
    return (
      <Aux>
        <div className={classes.MovieDescription}>
          <h2>{props.filmName}</h2>
          <p>{props.filmDesc}</p>
          <p>Directed By: {props.filmDirector}</p>
        </div>
      </Aux>
    );
  } else return <p>No Film Selected</p>;
};

export default moviedescription;
