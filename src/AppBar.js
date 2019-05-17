import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    [theme.breakpoints.up("md")]: {
      bottom: "unset",
      top: 0,
    },
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  grow: {},
});

function BottomAppBar(props) {
  const { classes } = props;

  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          traintimes
        </Typography>

        <div>
          <IconButton
            aria-owns={accountAnchorEl ? "menu-appbar" : undefined}
            onClick={e => setAccountAnchorEl(e.currentTarget)}
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>

          <Menu
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onClose={() => setAccountAnchorEl(null)}
            anchorEl={accountAnchorEl}
            open={!!accountAnchorEl}
            id="menu-account"
          >
            <MenuItem disabled>Signed in as user.email</MenuItem>

            <MenuItem selected onClick={() => console.log("auth().signOut()")}>
              Sign out
            </MenuItem>
          </Menu>

          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
