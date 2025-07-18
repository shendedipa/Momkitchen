import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DailyCookingChallenge from "./pages/DailyCokingChallange";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SearchRecipe from "./pages/SearchRecipe";
import RecipeHome from "./components/RecipeHome";

const App = () => {
  return (
    <Routes>
      {/* Public Landing Page */}
      <Route path="/" element={<Hero />} />

      {/* Public Login & Signup Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* All Pages are Now Public */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
          </>
        }
      />
      <Route
        path="/challenge"
        element={
          <>
            <Navbar />
            <DailyCookingChallenge />
          </>
        }
      />
      <Route
        path="/search"
        element={
          <>
            <Navbar />
            <SearchRecipe />
          </>
        }
      />
      <Route
        path="/dailyfood"
        element={
          <>
            <Navbar />
            <RecipeHome />
          </>
        }
      />
    </Routes>
  );
};

export default App;
