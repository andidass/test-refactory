import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link as Linkes,
  Grid,
  Typography,
  Container,
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

export default function Login() {
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
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
                {"Belum memiliki akun? Registrasi"}
              </Linkes>
            </Link>
          </form>
        </div>
      </Container>
    </Fragment>
  );
  const Authenticated = (
    <Fragment>
      <img src={account.picture} />
      <div>{account.name}</div>
      <div>{account.email}</div>
    </Fragment>
  );
  return <div>{account.auth ? Authenticated : LoginForm}</div>;
}
