import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover/:imdb_id" component={MoviePage} />
        <Route path="/discover" component={DiscoverMoviesPage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
