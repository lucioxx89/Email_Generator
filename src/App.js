import SuggestedEmailsList from "./components/SuggestedEmailsList";
import "./App.css";

function App() {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="App">
      <h1>Email Generator</h1>
      <button onClick={refreshPage}>Refresh</button>
      <SuggestedEmailsList></SuggestedEmailsList>
    </div>
  );
}

export default App;
