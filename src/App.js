import "./styles.css";
import Header from "./components/header/Header";
import Home from "./components/homepage/Home";
import SearchPage from "./components/searchpage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
