import React from "react";
import classes from "./SortBy.css";
//using Material UI for Displaying Sort By Menu
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const sortBy = props => {
  const [anchorEl, setAnchorEl] = React.useState(null); //to use state variables in functional component

  const handleClick = event => {
    // to display the dropdown menu on click
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    //hides menu when this method is called
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
        size="medium"
        style={{
          backgroundColor: "#ffffff",
          textTransform: "capitalize",
          marginTop: "8px",
          marginBottom: "4px"
        }}
      >
        Sort By..
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.Menu}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={props.dateSort}>Years</MenuItem>
        <MenuItem onClick={props.episodeSort}>Episodes</MenuItem>
      </Menu>
    </div>
  );
};

export default sortBy;
