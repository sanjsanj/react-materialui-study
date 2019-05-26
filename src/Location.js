import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  Typography,
  Container,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: theme.paperDefault,
}));

export default function Location() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Paper className={classes.root} onClick={handleClickOpen}>
        Select location
      </Paper>

      <Dialog
        aria-labelledby="form-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="form-dialog-title">title</DialogTitle>
        <DialogContent>content</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
