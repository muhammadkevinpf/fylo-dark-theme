import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
import About from "./components/About";
import Testimoni from "./components/Testimoni";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Feature />
      <About />
      <Testimoni />
      <Contact />
    </div>
  );
}

export default App;
