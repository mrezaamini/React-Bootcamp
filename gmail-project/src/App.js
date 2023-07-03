import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Leftbar from "./Leftbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailList from "./EmailList";
import Mail from "./Mail";
import Compose from "./Compose";
import { useDispatch, useSelector } from "react-redux";
import { selectCompose } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login } from "./features/userSlice";
function App() {
  const compose = useSelector(selectCompose);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Leftbar />
            <Routes>
              <Route path="/mail" Component={Mail} />
              <Route path="/" Component={EmailList} />
            </Routes>
          </div>

          {compose && <Compose />}
        </div>
      )}
    </Router>
  );
}

export default App;
