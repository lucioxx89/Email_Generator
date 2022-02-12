function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  return (
    <>
      <div class="list-group-item w-10 " />
      <i class="bi bi-clipboard"></i>
      {alias}@{domain}
    </>
  );
}

export default SuggestedEmail;
