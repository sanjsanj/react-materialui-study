import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Fab, IconButton, Menu, MenuItem } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: "24px auto",
    display: "flex",
  },
}));

export default function AddItem() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Add />
      </Fab>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Add tracker</MenuItem>
        <MenuItem onClick={handleClose}>Add another thing</MenuItem>
      </Menu>
    </>
  );
}
