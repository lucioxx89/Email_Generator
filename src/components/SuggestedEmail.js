import { useState } from "react";

function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  const [copyIcon, setCopyIcon] = useState("clipboard");
  const [colorBackground, setColorBackground] = useState("bg-light");

  const clickHandler = () => {
    navigator.clipboard.writeText(alias + "@" + domain);
    setCopyIcon("check-lg");
    setColorBackground("bg-green-200");
    console.log("Clicked");
  };

  return (
    <div
      onClick={clickHandler}
      className={`p-6 mb-2 ${colorBackground} text-dark cursor-pointer `}
    >
      <span className="font-bold">{alias}</span>@{domain}
      <i className={`bi bi-${copyIcon} pl-10`}></i>
    </div>
  );
}

export default SuggestedEmail;
