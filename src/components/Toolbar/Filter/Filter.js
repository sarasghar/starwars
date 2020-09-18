import React from "react";
import classes from "./Filter.css";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const filter = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
        size="large"
        style={{
          backgroundColor: "#ffffff"
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
      >
        <MenuItem onClick={handleClose}>Sort By</MenuItem>
        <MenuItem onClick={handleClose}>Years</MenuItem>
        <MenuItem onClick={handleClose}>Episodes</MenuItem>
      </Menu>
    </div>
  );
};

export default filter;
