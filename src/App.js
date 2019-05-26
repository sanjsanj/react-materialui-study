import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Collapse from "@material-ui/core/Collapse";
import { SnackbarProvider, withSnackbar } from "notistack";

import ProgressBar from "./ProgressBar";
import AppBar from "./AppBar";
import Title from "./Title";
import Location from "./Location";

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
