import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

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
  motto: {
    fontSize: "300",
  },
  logo: {
    width: "50%",
    marginBottom: "20px",
    marginTop: "35px",
  },
  mobile: {
    display: "none",
  },
});

function ManagerLogin() {
  const classes = useStyles();
  const navigate = useNavigate();
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = async (response) => {
    console.log(response.profileObj.email);
    if (response) {
      try {
        let userGoogleData = response.profileObj;
        await Axios.post(
          "http://localhost:3001/api/manager/GoogleLogin",
          userGoogleData
        ).then((res) => {
          console.log("yes", res.data.accessToken);
          if (res.data.accessToken) {
            localStorage.setItem("token", res.data.accessToken);
            navigate("/");
          }
        });
      } catch (err) {
        console.log("error");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setFormErrors(validate(formValues));
    
    // if (Object.keys(formErrors).length === 0) {
     
      setIsSubmit(true);
    
  };

  useEffect(async() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        const LoginData = {
          ProjectmanagerEmail: formValues.email,
          ProjectmanagerPWD: formValues.password,
        };
        console.log(LoginData);
        await Axios.post(
          "http://localhost:3001/api/manager/Login",
          LoginData
        ).then((res) => {
          console.log("yes", res.data.accessToken);
          if (res.data.accessToken) {
            localStorage.setItem("token", res.data.accessToken);
            navigate("/");
          }
        });
      } catch (err) {
        console.error(err);
      }
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
      errors.password = "Password must be in between 4-8 characters";
    }

    return errors;
  };

  return (
    <Grid className={classes.wrap}>
      <Paper
        style={{ width: "30rem", height: "35rem", backgroundColor: "#DEF2F1" }}
        elevation={20}
        className={classes.paper}
      >
        <Grid style={{ marginTop: "2rem" }} className={classes.formGrid}>
          <img className={classes.logo} src="./gizalogo.png" />
          <h2></h2>
          <GoogleLogin
            clientId="882099538447-526ufc3dsolfklb0egb6fobbovbu6pc4.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          />
          <hr />
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
              Login
            </Button>
            <Typography style={{ marginTop: "0.2rem" }}>
              Don't have an account yet?<Link to="/signup">signUp here</Link>
            </Typography>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ManagerLogin;
