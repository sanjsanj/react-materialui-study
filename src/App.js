import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Collapse from "@material-ui/core/Collapse";

import ProgressBar from "./ProgressBar";
import AppBar from "./AppBar";
import Title from "./Title";
import Location from "./Location";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

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

export default App;
