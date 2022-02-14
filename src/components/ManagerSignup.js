import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import OtpPage from "./otpPage";

const useStyles = makeStyles({
  wrap: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
  paper: {
    display: "flex",
    padding: "",
    width: "400px",
    height: "450px",
    justifyContent: "center",
    marginRight: "10px",
    borderRadius: "10px",
    backgroundColor: "rgb(222, 242, 241)",
  },
  formGrid: {
    marginTop: "px",
    textAlign: "center",
    width: "100%",
    padding: "1rem",
    backgroundColor: "rgb(222, 242, 241)",
  },
  scrumImage: {
    width: "400px",
  },
  parent: {
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    backgroundColor: "white",
    width: "100%",
    marginBottom: "10px",
  },
  // motto: {
  //   fontSize: "100p",
  // },
  logo: {
    width: "50%",
    marginBottom: "20px",
    marginTop: "35px",
  },
  mobile: {
    display: "none",
  },
});

function ManagerSignup() {
  const classes = useStyles();
  const navigate = useNavigate();
  const initialValue = { email: "", password: "", confirmPassword: "" };

  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [otpSend, setOtpSend] = useState(false); //
  const [serverErr, setServerErr] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      try {
        const registerData = {
          ProjectmanagerEmail: formValues.email,
          ProjectmanagerPWD: formValues.password,
          PmPasswordConfirm: formValues.confirmPassword,
        };
        console.log(registerData);
        await Axios.post(
          "http://localhost:3001/api/manager/signUp",
          registerData
        ).then((res) => {
          console.log(res);
          setOtpSend(true);
        });
      } catch (err) {
        console.error("this", err.response.data);
        let error = err.response.data;
        setServerErr(error.errorMessage);
      }
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Not a valid email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4 || values.password.length > 8) {
      errors.confirmPassword = "Password must be in between 4-8 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword != values.password) {
      errors.confirmPassword = "Password does not match";
    }
    return errors;
  };

  return (
    <>
      {otpSend ? (
        <OtpPage />
      ) : (
        <Grid className={classes.wrap}>
          <Grid
            className={classes.parent}
            item
            xs={12}
            md={6}
            order={{ xs: 2, md: 1 }}
           
          >
            <Paper
              style={{ height: "35rem", width: "30rem", borderRadius: "15px" }}
              elevation={20}
              className={classes.paper}
            >
              <Grid className={classes.formGrid}>
                <img className={classes.logo} src="./gizalogo.png" />
                <h2></h2>
                <hr />
                <Typography style={{color:"red"}}>{serverErr}</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="email"
                    value={formValues.email}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                    style={{ marginTop: "1rem" }}
                  ></TextField>
                  <Typography>{formErrors.email}</Typography>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="password"
                    value={formValues.password}
                    placeholder="Type your password"
                    onChange={handleChange}
                    style={{ marginTop: "1rem" }}
                  ></TextField>
                  <Typography>{formErrors.password}</Typography>
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    name="confirmPassword"
                    value={formErrors.Password}
                    placeholder="Retype your password"
                    onChange={handleChange}
                    style={{ marginTop: "1rem" }}
                  ></TextField>
                  <Typography>{formErrors.confirmPassword}</Typography>
                  <Button
                    style={{
                      marginTop: "1.5rem",
                      width: "9rem",
                      backgroundColor: "#05386B",
                      borderRadius: "4px",
                    }}
                    type="submit"
                    variant="contained"
                  >
                    SignUp
                  </Button>
                  <Typography style={{ marginTop: "0.3rem" }}>
                    Already have an account?
                    <Link to="/login">Login here</Link>
                  </Typography>
                </form>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}  sx={{
              display: { xs: "none", md: "block" },
            }}>
            <img
              className={classes.scrumImage}
              src="./undraw_scrum_board_re_wk7v.svg"
            />
            <Typography style={{ fontSize: "3rem", marginTop: "0.5rem" }}>
              Got a Project?
            </Typography>
            <Typography style={{ fontSize: "2rem" }}>
              Bring your team,plan and work together
              <br /> from anywhere in one tool <strong>Giza.</strong>
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ManagerSignup;
