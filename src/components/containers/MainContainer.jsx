import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../common/Header";
import Home from "../dashboard/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { useEffect, useState } from "react";
import LeftSidebar from "../common/LeftSideBar";
import Products from "../products";

const MainContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for testing

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
      <div className="container">
        <header>
          <h1>My Smart Home</h1>
        </header>
        <div className="body">
          <div className="sidebar">
            <LeftSidebar />
          </div>
          <div className="content">
            <Routes>
              {/*Dynamically render route based on selectedRoute */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainContainer;
