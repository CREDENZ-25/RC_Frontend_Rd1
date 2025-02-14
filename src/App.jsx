import React from "react";
import 'pixel-retroui/dist/index.css';
import Instructions from "../Pages/instructions";  // Ensure this file exists and is correct
import NextPage from "../Pages/NextPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="/nextpage" element={<NextPage />} />
      </Routes>
    </Router>
  );
};

export default App;
