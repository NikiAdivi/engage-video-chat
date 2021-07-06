import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import VideoCallPage from "./components/VideoCallPage/VideoCallPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
// import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <VideoCallPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
        {/* <Route path="/signup">
          <Signup />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
