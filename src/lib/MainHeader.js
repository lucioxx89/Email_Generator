import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <header>
      <h1
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/settings">
          <i className="bi-gear-fill bi--8xl"></i>
        </Link>{" "}
        <Link style={{ textDecoration: "none" }} to="/">
          Email Generator
        </Link>
        <button onClick={props.refreshSuggestedEmailList}>
          <i className="bi bi-arrow-clockwise"></i>
        </button>
      </h1>
    </header>
  );
};

export default MainHeader;
