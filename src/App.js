import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Classes from "./components/Classes/Classes";
import Footer from "./components/Footer/Footer";
import Forum from "./components/Forum/Forum";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import HomepageServices from "./components/HomepageServices/HomepageServices";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
            <HomepageServices></HomepageServices>
          </Route>
          <Route exact path="/">
            <Home></Home>
            <HomepageServices></HomepageServices>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/forum">
            <Forum></Forum>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
