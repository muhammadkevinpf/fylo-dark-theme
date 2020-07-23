import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Feature />
    </div>
  );
}

export default App;
