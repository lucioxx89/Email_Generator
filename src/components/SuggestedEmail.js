import { useState } from "react";

function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  const [copyIcon, setCopyIcon] = useState("clipboard");
  const [colorBackground, setColorBackground] = useState(
    "p-3 mb-2 bg-light text-dark cursor-pointer"
  );

  const clickHandler = () => {
    navigator.clipboard.writeText(alias + "@" + domain);
    setCopyIcon("check-lg");
    setColorBackground("p-3 mb-2 bg-green-500 text-white");
    console.log("Clicked");
  };

  return (
    <div
      onClick={clickHandler}
      className={colorBackground}
      // className="p-4 border-1 border-radius cursor-pointer"
    >
      <span className="font-bold">{alias}</span>@{domain}
      <i className={`bi bi-${copyIcon} pl-10`}></i>
    </div>
  );
}

export default SuggestedEmail;
