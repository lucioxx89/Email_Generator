function PersonalEmail() {
  let RandomEmail = " ";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_+-;:,<>~!?@#$%^&*()";
  for (var i = 0; i < characters.length; i++) {
    RandomEmail += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return (
    <div>
      <h2> {RandomEmail} @facebook</h2>
    </div>
  );
}

export default PersonalEmail;
