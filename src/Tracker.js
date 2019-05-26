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

import SelectDialog from "./SelectDialog";
import VerticalLinearStepper from "./VerticalLinearStepper";

const useStyles = makeStyles(theme => ({
  root: theme.paperDefault,
  _dialog: {
    // flex: "1 1 auto",
    // color: "green",
  },
}));

export default function Tracker() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSearch() {}

  return (
    <>
      <Paper className={classes.root} onClick={handleClickOpen}>
        Tracker
      </Paper>

      <Dialog
        aria-labelledby="form-dialog-title"
        className={classes._dialog}
        onClose={handleClose}
        open={open}
        fullWidth
      >
        <DialogTitle id="form-dialog-title" className={classes.dialog}>
          title
        </DialogTitle>
        {/* <DialogContent> */}
        <VerticalLinearStepper handleClose={handleClose} />
        {/* </DialogContent> */}
        <DialogActions>
          {/* <Button onClick={handleClose}>close</Button> */}
          {/* <Button onClick={handleSearch}>search</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}