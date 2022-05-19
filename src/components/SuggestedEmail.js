import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  const [copyIcon, setCopyIcon] = useState("clipboard");
  const [colorBackground, setColorBackground] = useState("bg-light");

  // const [resetIcon, setResetIcon] = useState("clipboard");
  // const [resetColorBackground, setResetColorBackground] = useState("bg-light");

  const styleAsCopied = () => {
    setCopyIcon("check-lg");
    setColorBackground("bg-green-200");
  };

  // const resetValue = () => {
  //   setResetIcon("clipboard");
  //   setResetColorBackground("bg-light");
  // };

  return (
    <>
      <CopyToClipboard
        text={`${alias}@${domain}`}
        onCopy={() => styleAsCopied()}
      >
        <div
          // reset={resetValue}
          className={`p-6 mb-2 ${colorBackground} text-dark cursor-pointer`}
          // className={`p-6 mb-2 ${setResetColorBackground} text-dark cursor-pointer`}
        >
          <span className="font-bold">{alias}</span>@{domain}
          <i className={`bi bi-${copyIcon} ml-5`}></i>
        </div>
      </CopyToClipboard>
    </>
  );
}

export default SuggestedEmail;
