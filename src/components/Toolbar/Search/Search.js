import React from "react";
import classes from "./Search.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const search = props => {
  return (
    <form>
      <TextField
        className={classes.TextField}
        defaultValue="Type to search.."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};
export default search;
