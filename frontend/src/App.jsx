import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DailyCookingChallenge from "./pages/DailyCokingChallange";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"; // Add this
import PrivateRoute from "./components/PrivateRoute";
import Signup from "./pages/Signup";
import SearchRecipe from "./pages/SearchRecipe";
import RecipeHome from "./components/RecipeHome";

const App = () => {
  return (
    <Routes>
      {/* Public Landing Page */}
      <Route path="/" element={<Hero />} />
      {/* 
      Public Login Page */}
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      {/* Private Routes */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Navbar />
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path="/about"
        element={
          <PrivateRoute>
            <Navbar />
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Navbar />
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="/challenge"
        element={
          <PrivateRoute>
            <Navbar />
            <DailyCookingChallenge />
          </PrivateRoute>
        }
      />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <Navbar />
            <SearchRecipe />
          </PrivateRoute>
        }
      />
      <Route
        path="/dailyfood"
        element={
          <PrivateRoute>
            <Navbar />
            <RecipeHome />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
