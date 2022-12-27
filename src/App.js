import React from "react"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";


const App = () => {
    return (
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
          </Routes>
        </Router>
      </div>
    )
}

export default App;
