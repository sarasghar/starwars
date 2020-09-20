import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import SortBy from "../MovieRenderer/Toolbar/SortBy/SortBy";
import Search from "../MovieRenderer/Toolbar/Search/Search";
import MovieList from "../MovieRenderer/MovieList/MovieList";

import classes from "../MovieRenderer/MovieRenderer.css";

class MovieRenderer extends Component {
  //class based component to maintain state

  state = {
    sortedFilmList: this.props.filmList
  };

  sortByDateHandler = () => {
    //sort by Date method
    let filmListToBeSorted = [...this.state.sortedFilmList]; //for changing state immutably
    filmListToBeSorted = filmListToBeSorted
      .slice()
      .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

    this.setState({ sortedFilmList: filmListToBeSorted });
  };
  sortByEpisodeHandler = () => {
    //sort by Episode method
    let filmListToBeSorted = [...this.state.sortedFilmList];
    filmListToBeSorted = filmListToBeSorted
      .slice()
      .sort((a, b) => a.episode - b.episode);

    this.setState({ sortedFilmList: filmListToBeSorted });
  };

  searchHandler = event => {
    //film search method based on user input
    const userSearch = event.target.value;
    if (userSearch.length) {
      const searchResult = this.props.filmList.filter(film => {
        return film.title.toLowerCase().includes(userSearch.toLowerCase());
      });

      this.setState({
        sortedFilmList: searchResult
      });
    } else if (userSearch.length === 0) {
      this.setState({ sortedFilmList: this.props.filmList }); //show all films if search field is empty
    }
  };

  render() {
    return (
      <Aux>
        <div className={classes.Toolbar_container}>
          <div className={classes.SortBy}>
            <SortBy
              dateSort={this.sortByDateHandler}
              episodeSort={this.sortByEpisodeHandler}
            />
          </div>
          <div className={classes.Search}>
            <Search userSearchInput={event => this.searchHandler(event)} />
          </div>
        </div>

        <MovieList filmList={this.state.sortedFilmList} />
      </Aux>
    );
  }
}
export default MovieRenderer;
