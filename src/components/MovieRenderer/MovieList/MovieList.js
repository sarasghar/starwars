import React, { Component } from "react";
import classes from "./MovieList.css";
import MovieDescription from "../MovieDescription/MovieDescription";

class Movielist extends Component {
  //component for listing films in tabular form
  state = {
    filmId: "",
    filmName: "",
    filmDescription: "",
    filmDirector: ""
  };

  filmClickHandler = film => {
    // to update state on a film clicked, values to be passed to movieDescription component to show the specific film desc
    this.setState({
      filmId: film.episode,
      filmName: film.title,
      filmDescription: film.description,
      filmDirector: film.director
    });
  };

  render() {
    const filmList = this.props.filmList;

    let filmListAll = filmList.map(igKey => {
      return (
        <tr
          className={classes.Tr}
          key={igKey.episode}
          onClick={() => this.filmClickHandler(igKey)}
        >
          <td className={classes.Th}>EPISODE: {igKey.episode}</td>
          <td className={classes.Th}>{igKey.title}</td>
          <td className={classes.Th}>{igKey.release_date}</td>
        </tr>
      );
    });
    return (
      <div className={classes.Starwarmovies_container}>
        <div className={classes.MovieList}>
          <table className={classes.Table}>
            <tbody>{filmListAll}</tbody>
          </table>
        </div>
        <div>
          <MovieDescription
            filmName={this.state.filmName}
            filmDesc={this.state.filmDescription}
            filmDirector={this.state.filmDirector}
          />
        </div>
      </div>
    );
  }
}

export default Movielist;
