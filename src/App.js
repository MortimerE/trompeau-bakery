import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import QuestionsPage from "./components/QuestionsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/questions" component={QuestionsPage} />
      </Switch>
    </Router>
  );
}

export default App;
