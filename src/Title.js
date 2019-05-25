import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({}));

export default function Title() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1">Title</Typography>
    </div>
  );
}
