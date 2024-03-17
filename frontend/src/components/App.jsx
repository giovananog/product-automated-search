import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";


function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/:product" element={<Result/>}></Route>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;