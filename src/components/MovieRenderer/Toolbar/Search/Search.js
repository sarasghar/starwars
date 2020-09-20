import React from "react";
import classes from "./Search.css";
import TextField from "@material-ui/core/TextField"; //using Material UI for displaying textbox with a search icon
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const search = props => {
  return (
    <TextField
      className={classes.TextField}
      placeholder="Type to search.."
      variant="outlined"
      margin="dense"
      onChange={props.userSearchInput}
      onClick={props.clearDefault}
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
};
export default search;
