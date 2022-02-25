import { useState } from "react";

const Settings = (props) => {
  const [domain, setDomain] = useState(" ");

  const changeHandler = (event) => {
    setDomain("event.target.value");
    console.log(event.target.value);
  };

  return (
    <>
      <h1>Setting</h1>
      <form>
        <label>Chose your domain:</label>
        <input
          style={{
            width: "50%",
            padding: "4px",
            border: "2px solid rgb(68, 144, 252)",
            borderRadius: "4px",
          }}
          onChange={changeHandler}
        />
      </form>
    </>
  );
};

export default Settings;
