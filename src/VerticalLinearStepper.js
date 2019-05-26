import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

import IntegrationReactSelect from "./SelectDialog";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    "Select starting location",
    "Select destination",
    "Select changeover time",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create.`;
    case 1:
      return <input type="text" />;
    case 2:
      return <input type="time" step="60" />;
    default:
      return "Unknown step";
  }
}

function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function handleDone() {
    props.handleClose();
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>

            <StepContent>
              <Typography>{getStepContent(index)}</Typography>

              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      <Collapse in={activeStep === steps.length}>
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
          <Button
            onClick={handleDone}
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Done
          </Button>
        </Paper>
      </Collapse>
    </div>
  );
}

export default VerticalLinearStepper;
