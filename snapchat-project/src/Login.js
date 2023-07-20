import React from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { login } from "./features/snapSlice";

function Login() {
  const dispatch = useDispatch();
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch(
          login({
            username: res.user.displayName,
            profilePic: res.user.photoURL,
            id: res.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
        <Button variant="outlined" onClick={signin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
