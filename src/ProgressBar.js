import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  root: {
    position: "absolute",
    width: "100%",
    top: 0,
    // width: "90%",
    // left: "5%",

    [theme.breakpoints.up("md")]: {
      top: 80,
    },
  },
});

function LinearIndeterminate(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearIndeterminate);
