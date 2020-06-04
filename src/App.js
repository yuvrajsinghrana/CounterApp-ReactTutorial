import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
