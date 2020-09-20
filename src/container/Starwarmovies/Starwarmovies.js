import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import MovieRenderer from "../../components/MovieRenderer/MovieRenderer";
import Films from "../../films"; //json data

import classes from "./Starwarmovies.css"; //using CSS modules for styling

const starwarmovies = props => {
  const filmList = Films.map(film => {
    return {
      episode: film.fields.episode_id,
      title: film.fields.title,
      release_date: film.fields.release_date,
      description: film.fields.opening_crawl,
      director: film.fields.director
    };
  });

  return (
    <Aux>
      <div className={classes.Starwarmovies_wrapper}>
        <MovieRenderer filmList={filmList} /> 
      </div>
    </Aux>
  );
};

export default starwarmovies;
