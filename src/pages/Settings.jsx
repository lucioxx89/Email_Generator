import { useState } from "react";
import Cookies from "universal-cookie";

const Settings = (props) => {
  const cookies = new Cookies();
  const [enteredDomain, setEnteredDomain] = useState("");

  const domainChangeHandler = (event) => {
    setEnteredDomain(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredDomain(""); //2 ways binding
    props.setDomain(enteredDomain);
    cookies.set("domain", enteredDomain, { path: "/", maxAge: 500000000 });
  };

  return (
    <>
      <p style={{ padding: "20px" }}>Current domain: {props.currentDomain}</p>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Enter your domain"
          value={enteredDomain} //2 ways binding, to get value of input back to empty string
          style={{
            width: "50%",
            padding: "4px",
            border: "2px solid rgb(68, 144, 252)",
            borderRadius: "5px",
          }}
          onChange={domainChangeHandler}
        />
        <button
          type="submit"
          style={{
            width: "10%",
            marginLeft: "1%",
            padding: "4px",
            border: "2px solid rgb(68, 144, 252)",
            borderRadius: "5px",
          }}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default Settings;
