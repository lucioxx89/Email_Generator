import SuggestedEmailsList from "./components/SuggestedEmailsList";
import "./App.css";

function App() {
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div className="App">
      <h1>
        Email Generator{" "}
        <button onClick={refreshPage}>
          <i class="bi bi-arrow-clockwise"></i>
        </button>
      </h1>

      <SuggestedEmailsList></SuggestedEmailsList>
    </div>
  );
}

export default App;
