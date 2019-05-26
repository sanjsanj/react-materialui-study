import React from "react";
import { CssBaseline, Collapse, Container } from "@material-ui/core";
import { SnackbarProvider, withSnackbar } from "notistack";

import ProgressBar from "./ProgressBar";
import AppBar from "./AppBar";
import Title from "./Title";
import Location from "./Location";
import Tracker from "./Tracker";
import AddItem from "./AddItem";

function App(props) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    props.enqueueSnackbar("Loading", {
      variant: "info",
      autoHideDuration: 3000,
    });

    // props.enqueueSnackbar("First message", {
    //   variant: "warning",
    //   autoHideDuration: 1000,
    // });
    // props.enqueueSnackbar("Second message!", {
    //   variant: "error",
    //   autoHideDuration: 1000,
    // });
    // props.enqueueSnackbar("Fifth message", {});

    const loadingTimeout = setTimeout(() => {
      setLoading(false);
      props.enqueueSnackbar("Done", {
        variant: "success",
        autoHideDuration: 3000,
      });
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, [props]);

  return (
    <>
      <CssBaseline />

      {loading && <ProgressBar />}

      <AppBar />

      <Container>
        <Collapse in={loading}>
          <Title />
        </Collapse>

        <Location />

        <Tracker />
        <Tracker />
        <Tracker />

        <AddItem />
      </Container>
    </>
  );
}

const AppHoc = withSnackbar(App);

function AppWithNotifications() {
  return (
    <SnackbarProvider maxSnack={6}>
      <AppHoc />
    </SnackbarProvider>
  );
}

export default AppWithNotifications;
