import React, { Fragment, useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

export default function Login() {
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
      name: response.profileObj.givenName,
      picture: response.profileObj.imageUrl,
      email: response.profileObj.email,
      type: "google",
    });
  };

  const componentClicked = () => {
    console.log("button clicked!");
  };

  const LoginForm = (
    <Fragment>
      <div>LOGIN</div>
      <div>{account.name}</div>
      <GoogleLogin
        clientId="32563025864-7ghthpucjqa92q9ca0puhij8sv217ee6.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <FacebookLogin
        appId="221833252861286"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
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
