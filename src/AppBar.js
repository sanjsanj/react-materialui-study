import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import StarBorder from "@material-ui/icons/StarBorder";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";

import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import InboxIcon from "@material-ui/icons/Inbox";
import { Divider } from "@material-ui/core";

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
  menu: {
    [theme.breakpoints.up("md")]: {
      marginTop: 44,
    },
  },
  anchor: {
    color: theme.anchor.main,
  },
});

function BottomAppBar(props) {
  const { classes } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" className={classes.title}>
          App
        </Typography>

        <div>
          <IconButton
            aria-owns={anchorEl ? "menu-appbar" : undefined}
            onClick={e => setAnchorEl(e.currentTarget)}
            aria-label="Open drawer"
            aria-haspopup="true"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onClose={() => setAnchorEl(null)}
            className={classes.menu}
            anchorEl={anchorEl}
            open={!!anchorEl}
            id="menu-account"
          >
            <MenuItem>About</MenuItem>
            <MenuItem>Cookie policy</MenuItem>

            <Divider />

            <MenuItem disabled>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>

              <Typography variant="inherit" noWrap>
                Contact
              </Typography>
            </MenuItem>

            <MenuItem>
              <a
                href="mailto:hello@material_app.com"
                className={classes.anchor}
                rel="noopener noreferrer"
                target="_top"
              >
                hello@material_app.com
              </a>
            </MenuItem>

            <Divider />

            <MenuItem disabled>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>

              <Typography variant="inherit" noWrap>
                firstname.lastname@longemailhostname.co.uk
              </Typography>
            </MenuItem>

            <MenuItem onClick={() => console.log("auth().signOut()")}>
              Sign out
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

BottomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);
