import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Full name is required!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profile,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profile,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const appSignIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="loginPage">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
        alt=""
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Profile Pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button onClick={appSignIn}>Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="loginPage__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
