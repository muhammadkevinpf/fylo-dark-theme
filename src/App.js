import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
import About from "./components/About";
import Testimoni from "./components/Testimoni";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Feature />
      <About />
      <Testimoni />
    </div>
  );
}

export default App;
