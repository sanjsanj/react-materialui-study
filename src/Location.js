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

const useStyles = makeStyles(theme => ({
  root: theme.paperDefault,
  _dialog: {
    // flex: "1 1 auto",
    // color: "green",
  },
  weatherRoot: {
    textAlign: "center",
    // "& > *": {
    //   width: "20%",
    // },
    "& > *:not(:first-child)": {
      borderLeft: "1px solid black",
    },
  },
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

  function handleSearch() {}

  function dateTimeNow() {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <>
      <Paper className={classes.root} onClick={handleClickOpen}>
        <Typography>London</Typography>
        <Typography>{dateTimeNow()}</Typography>

        <Grid container spacing={3} justify="center">
          <Grid item xs={6} sm={3} md={2}>
            <Typography>Today</Typography>
            <Typography>Icon</Typography>
            <Typography>20-22</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography>Tomorrow</Typography>
            <Typography>Icon</Typography>
            <Typography>20-22</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={3}
          justify="space-between"
          className={classes.weatherRoot}
        >
          <Grid>
            <Typography>15c</Typography>
            <Typography>
              <img src="http://openweathermap.org/img/w/10d.png" />
            </Typography>
            <Typography>6am</Typography>
          </Grid>
          <Grid>
            <Typography>18c</Typography>
            <Typography>
              <img src="http://openweathermap.org/img/w/04d.png" />
            </Typography>
            <Typography>9am</Typography>
          </Grid>
          <Grid>
            <Typography>20c</Typography>
            <Typography>
              <img src="http://openweathermap.org/img/w/10n.png" />
            </Typography>
            <Typography>12pm</Typography>
          </Grid>
          <Grid>
            <Typography>17c</Typography>
            <Typography>
              <img src="http://openweathermap.org/img/w/03n.png" />
            </Typography>
            <Typography>3pm</Typography>
          </Grid>
          <Grid>
            <Typography>14c</Typography>
            <Typography>
              <img src="http://openweathermap.org/img/w/02d.png" />
            </Typography>
            <Typography>6pm</Typography>
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
        <DialogContent>
          <SelectDialog />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleSearch} color="primary" variant="contained">
            search
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
