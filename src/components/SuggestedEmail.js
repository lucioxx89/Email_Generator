function SuggestedEmail(props) {
  const alias = props.alias;
  const domain = props.domain;

  return (
    <li>
      {alias}@{domain}
    </li>
  );
}

export default SuggestedEmail;
