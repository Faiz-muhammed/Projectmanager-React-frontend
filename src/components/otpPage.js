import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import OtpInput from "react-otp-input";
// import OTPInput, { ResendOTP } from "otp-input-react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import { ThemeProvider } from '@mui/material/styles';
// import "./styles.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "grey",
    height: "50vh",
    textAlign: "center",
  },
  avatar: {
    margin: "20px",
    // backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: "20px",
  },
  paper: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [otpState, setOtpState] = useState({ otp: "" });

  const handleChange = (otp) => {
    // const { name, value } = e.target;
    setOtpState({ otp });
  };

  console.log(otpState);
  const verify = async () => {
    try {
      const otpData = otpState;
      console.log(otpData);
      await Axios.post(
        "http://localhost:3001/api/manager/verify",
        otpData
      ).then((res) => {
        console.log(res);
        navigate("/");
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid
          container
          style={{ backgroundColor: "white" }}
          className={classes.grid}
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item container justify="center">
            <Grid item container alignItems="center" direction="column">
              <Grid item>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Verification Code
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Paper elevation={0}>
              <Typography variant="h6">
                Please enter the verification code sent to your Email
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Grid item spacing={3} justify="center">
              <OtpInput
                value={otpState.otp}
                onChange={handleChange}
                numInputs={4}
                separator={
                  <span>
                    <strong>.</strong>
                  </span>
                }
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "1px solid rgba(0,0,0,0.3)",
                }}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                onClick={verify}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Verify
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
