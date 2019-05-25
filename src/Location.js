import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: theme.paperDefault,
}));

export default function Location() {
  const classes = useStyles();

  return <Paper className={classes.root}>Select location</Paper>;
}
