import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
import About from "./components/About";
import Testimoni from "./components/Testimoni";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Feature />
      <About />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
