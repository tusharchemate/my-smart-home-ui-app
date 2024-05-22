// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/dashboard/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Dummy login function (replace with actual authentication logic)
  const login = () => {
    // Perform authentication logic here
    // For simplicity, assume authentication is successful
    setIsLoggedIn(true);
  };

  // Dummy registration function (replace with actual registration logic)
  const register = () => {
    // Perform registration logic here
    // For simplicity, assume registration is successful
    setIsLoggedIn(true); // Auto-login after registration
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={login} />
            }
          />
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route
            path="/register"
            element={<Register onRegister={register} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
