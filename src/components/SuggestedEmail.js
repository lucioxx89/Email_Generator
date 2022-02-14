// import { CopyToClipboard } from "react-copy-to-clipboard";

function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <div class="p-4 border-1 border-radius ">
      {alias}@{domain}
      <i
        onClick={clickHandler}
        class="bi bi-clipboard cursor-pointer pl-10 "
      ></i>
    </div>
  );
}

export default SuggestedEmail;
