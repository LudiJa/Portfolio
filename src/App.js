import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Comp from "./components/comp/Comp";
import Exps from "./components/exps/Exps";
import Projects from "./components/projects/projects";
import Interest from "./components/interest/Interest";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <Router>
      <body className="row g-0 w-100">
        <aside className="col-md-2">
          <Navbar />
        </aside>

        <main className="col-md-10">
          <Intro />
          <Comp />
          <Projects />
          <Exps />
          {/* <br />
          <Interest /> */}
          <div className="scrollUp">
            <ScrollUp />
          </div>
        </main>
      </body>
    </Router>
  );
}

export default App;
