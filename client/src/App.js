import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Resume from "./pages/Resume/Resume";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/community" element={<Explore />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}
