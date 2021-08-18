import React, {Fragment} from "react";
import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Core from './components/Core'

export default function App() {
  return (
    <Router>
    <main>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/core">Core</a></li>
        </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/core"  component={Core} />
     </main>
     </Router>
  );
}
// Home Page
const Home = () => (
    <Fragment>
      <h1>Home</h1>
      <FakeText />
    </Fragment>
    );
  // About Page
  const About = () => (
    <Fragment>
      <h1>About</h1>
      <FakeText />
    </Fragment>
    );
  
  const FakeText = () => (
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    )