import { Link } from "react-router-dom";

// import * as bootstrap from "bootstrap";

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
          <i
            className="bi-gear-fill bi"
            style={{ fontSize: "40px", color: "blue" }}
          ></i>
        </Link>{" "}
        <Link
          style={{ textDecoration: "none", fontSize: "40px", color: "blue" }}
          to="/"
        >
          Email Generator
        </Link>
        <button onClick={props.refreshSuggestedEmailList}>
          <i
            className="bi bi-arrow-clockwise"
            style={{ fontSize: "40px", color: "blue" }}
          ></i>
        </button>
      </h1>
    </header>
  );
};

export default MainHeader;
