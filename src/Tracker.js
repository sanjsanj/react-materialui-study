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
  Grid,
} from "@material-ui/core";

import SelectDialog from "./SelectDialog";
import VerticalLinearStepper from "./VerticalLinearStepper";

const useStyles = makeStyles(theme => ({
  root: { ...theme.paperDefault, flexGrow: "1", textAlign: "center" },
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
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h6">Manchester to Kings Cross</Typography>
          </Grid>

          <Grid item xs={4} sm={3} md={2}>
            <Typography>09:45</Typography>
            <Typography color="primary">On time</Typography>
          </Grid>

          <Grid item xs={4} sm={3} md={2}>
            <Typography color="textSecondary">10:15</Typography>
            <Typography color="secondary">10:20</Typography>
          </Grid>

          <Grid item xs={4} sm={3} md={2}>
            <Typography color="textSecondary">10:45</Typography>
            <Typography color="error">Cancelled</Typography>
          </Grid>
        </Grid>
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
