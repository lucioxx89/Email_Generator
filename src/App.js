import SuggestedEmailsList from "./components/SuggestedEmailsList";
import Settings from "./pages/Settings";
import { Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="App">
      <header>
        <Link to="/settings">
          <i class="bi bi-gear"></i>
        </Link>
        <h1>
          Email Generator
          <button onClick={refreshPage}>
            <i class="bi bi-arrow-clockwise"></i>
          </button>
        </h1>
      </header>
      <main>
        <div>
          <Route exact path="/">
            <SuggestedEmailsList></SuggestedEmailsList>
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>
        </div>
      </main>
    </div>
  );
}

export default App;
