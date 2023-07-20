import React, { useEffect } from "react";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CapturePreview from "./CapturePreview";
import Messages from "./Messages";
import MessageView from "./MessageView";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/snapSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/snapSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="body">
            <img
              className="frame"
              src="https://www.transparentpng.com/thumb/-iphone-x/8Sr3af-apple-iphone-transparent-mobile-search-png.png"
              alt=""
            />
            <div className="app__background">
              <Routes>
                <Route path="/" exact Component={WebcamCapture} />
                <Route path="/capturePrv" Component={CapturePreview} />
                <Route path="/messages" Component={Messages} />
                <Route path="/messages/chat" Component={MessageView} />
              </Routes>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
