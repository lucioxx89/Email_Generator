function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  const clickHandler = () => {
    console.log("Clicked");
  };

  return (
    <>
      <div class="list-group-item w-10 " />
      <button onClick={clickHandler}>
        <i class="bi bi-clipboard"></i>
      </button>
      {alias}@{domain}
    </>
  );
}

export default SuggestedEmail;
