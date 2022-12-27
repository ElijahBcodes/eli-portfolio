import React from "react"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import { Routes, Route } from "react-router-dom";


const App = () => {
    return (
      <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

  </>
    )
}

export default App;
