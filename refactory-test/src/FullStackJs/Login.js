import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setTokenAuth";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link as Linkes,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const [account, setAccount] = useState({
    auth: null,
    name: "",
    picture: "",
    email: "",
    type: "",
  });

  const responseFacebook = (response) => {
    console.log(response);
    setAccount({
      auth: true,
      name: response.name,
      picture: response.picture.data.url,
      email: response.email,
      type: "facebook",
    });
  };

  const responseGoogle = (response) => {
    console.log(response);
    setAccount({
      auth: true,
      name: response.Ft.Ve,
      picture: response.profileObj.imageUrl,
      email: response.profileObj.email,
      type: "google",
    });
  };

  const componentClicked = () => {
    console.log("button clicked!");
  };

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formLogin;

  const onChange = (e) =>
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    // login(email, password);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ email, password });
      const res = await axios.post("/login", body, config);
      // console.log(res.data) // --> token;
      setAuthToken(res.data.token);
      const res2 = await axios.get("/login");
      console.log(res2.data);
      setAccount({
        auth: true,
        email: res2.data.email,
      });
      window.alert("Login success");
    } catch (err) {
      // console.error(err.response.data);
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => window.alert(error.msg));
      }
    }
  };

  const LoginForm = (
    <Fragment>
      <Container component="main" maxWidth="xs" className="full-height">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => onChange(e)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => onChange(e)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Masuk
            </Button>
            <subtitle1>atau</subtitle1>
            <div className="button">
              <GoogleLogin
                clientId="32563025864-7ghthpucjqa92q9ca0puhij8sv217ee6.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                buttonText="LOGIN WITH GOOGLE"
              />
            </div>
            <div className="button">
              <FacebookLogin
                appId="221833252861286"
                autoLoad={true}
                fields="name,email,picture"
                textButton="Login with Facebook"
                onClick={componentClicked}
                callback={responseFacebook}
              />
            </div>
            <Link to="./register">
              <Linkes variant="body2">
                {"Have no account? Register here"}
              </Linkes>
            </Link>
          </form>
        </div>
      </Container>
    </Fragment>
  );
  const Authenticated = (
    <Fragment>
      <Paper
        variant="outlined"
        style={{
          margin: `5%`,
          width: "90vw",
          backgroundColor: "#F4F6F6",
          height: "90vh",
        }}
      >
        <div style={{ marginTop: `5%` }}>
          <Avatar
            alt={account.name}
            src={account.picture}
            style={{ display: "inline-flex", width: `15%`, height: `15%` }}
          />
          <Typography variant="h6">
            Hallo, <b> {account.name && account.name} </b>
          </Typography>
          <Typography variant="subtitle1">
            Selamat datang di website kami
          </Typography>
          <Typography variant="subtitle1">{account.email}</Typography>
        </div>
      </Paper>
    </Fragment>
  );
  return <div>{account.auth ? Authenticated : LoginForm}</div>;
};

export default Login;
