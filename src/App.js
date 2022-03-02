import SuggestedEmailsList from "./components/SuggestedEmailsList";
import Settings from "./pages/Settings";
import { Route } from "react-router-dom";
import MainHeader from "./lib/MainHeader";
import { useState } from "react";
import Cookies from "universal-cookie";

import "./App.css";

function App() {
  // const refreshPage = () => {
  //   window.location.reload(false);
  // };
  const cookies = new Cookies();
  const cookieValue = cookies.get("domain");

  const [domain, setDomain] = useState(cookieValue || "example.com");
  const [randomRenderKey, setRandomRenderKey] = useState(Math.random());

  const refreshSuggestedEmailList = () => {
    setRandomRenderKey(Math.random());
  };

  return (
    <div className="App">
      <main>
        <div>
          <MainHeader
            refreshSuggestedEmailList={refreshSuggestedEmailList}
          ></MainHeader>
          <Route exact path="/">
            <SuggestedEmailsList
              key={randomRenderKey}
              domain={domain}
            ></SuggestedEmailsList>
          </Route>

          <Route path="/settings">
            <Settings currentDomain={domain} setDomain={setDomain} />
          </Route>
        </div>
      </main>
    </div>
  );
}

export default App;
