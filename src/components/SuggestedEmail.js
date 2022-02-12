function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  return (
    <div class="card-body">
      {alias}@{domain}
    </div>
  );
}

export default SuggestedEmail;
