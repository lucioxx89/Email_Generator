import { useState } from "react";

const Settings = () => {
  const [enteredDomain, setEnteredDomain] = useState(" ");

  const domainChangeHandler = (event) => {
    setEnteredDomain(event.target.value);
    console.log("input", event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const chosenDomain = { domain: enteredDomain };
    console.log("hello", chosenDomain);
    setEnteredDomain(""); //2 ways binding
  };

  return (
    <>
      <h1>Settings</h1>
      <form onSubmit={formSubmitHandler}>
        <label>Chose your domain:</label>
        <input
          type="text"
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
          {" "}
          Add{" "}
        </button>
      </form>
    </>
  );
};

export default Settings;
