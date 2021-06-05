import React, { useState, Fragment } from "react";
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
  Typography,
  Container,
  Link as Linkes,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = ({ register }) => {
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

  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      window.alert("Password doesn't match");
    } else {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify({
          username,
          email,
          password,
        });
        const res = await axios.post("/registration", body, config);
        // console.log(res.data); //--> token
        setAuthToken(res.data.token);
        const res2 = await axios.get("/login");
        console.log(res2.data);
        setAccount({
          auth: true,
          email: res2.data.email,
        });
        {
          window.alert("Register success");
        }
      } catch (err) {
        // console.error(err.response.data);
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error) => window.alert(error.msg));
        }
      }
      // setFormRegister({
      //   username: "",
      //   email: "",
      //   password: "",
      //   password2: "",
      // });
    }
  };

  const onChange = (e) =>
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });

  const { username, email, password, password2 } = formRegister;

  const RegisterForm = (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration Account
        </Typography>
        <form className={classes.form} noValidate onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            type="text"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Kata Sandi"
            type="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Ulangi Kata Sandi"
            type="password"
            id="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={(e) => onSubmit(e)}
          >
            Register
          </Button>

          <subtitle1>atau</subtitle1>
          <div className="button">
            <GoogleLogin
              clientId="32563025864-7ghthpucjqa92q9ca0puhij8sv217ee6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              buttonText="REGISTER WITH GOOGLE"
            />
          </div>
          <div className="button">
            <FacebookLogin
              appId="221833252861286"
              autoLoad={true}
              fields="name,email,picture"
              textButton="Register with Facebook"
              onClick={componentClicked}
              callback={responseFacebook}
            />
          </div>

          <Link to="./login">
            <Linkes variant="body2">
              {"Already have account? Login here"}
            </Linkes>
          </Link>
        </form>
      </div>
    </Container>
  );
  const Authenticated = (
    <Fragment>
      <img src={account.picture} />
      <div>{account.name}</div>
      <div>{account.email}</div>
    </Fragment>
  );

  return <div>{account.auth ? Authenticated : RegisterForm}</div>;
};

export default Register;
