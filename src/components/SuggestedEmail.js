import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  const [copyIcon, setCopyIcon] = useState("clipboard");
  const [colorBackground, setColorBackground] = useState("bg-light");

  const styleAsCopied = () => {
    setCopyIcon("check-lg");
    setColorBackground("bg-green-200");
  };

  return (
    <>
      <CopyToClipboard
        text={`${alias}@${domain}`}
        onCopy={() => styleAsCopied()}
      >
        <div
          className={`p-6 mb-2 ${colorBackground} text-dark cursor-pointer `}
        >
          <span className="font-bold">{alias}</span>@{domain}
          <i className={`bi bi-${copyIcon} pl-10`}></i>
        </div>
      </CopyToClipboard>
    </>
  );
}

export default SuggestedEmail;
