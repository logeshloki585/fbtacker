import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.component";
import About from "./pages/About";
import ProtectedRoute from "./Components/Pub&Pro.routes/ProtectedRoute";
import { useSelector } from "react-redux";
import Subscription from "./pages/Subscription";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      
      <Navbar />
    
      <Routes>
        <Route
          path="/login"
          exact
          element={
              <Login />
          }
        />
        <Route
          path="/register"
          exact
          element={
              <Register />

          }
        />
        <Route
          path="/profile"
          exact
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/subscription"
          exact
          element={
            <ProtectedRoute>
              <Subscription />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
