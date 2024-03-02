import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
