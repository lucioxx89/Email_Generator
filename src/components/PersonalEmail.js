function PersonalEmail() {
  // OPTION 1
  let RandomEmail = " ";

  const emailLength = 5 && 10;

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_+-;:,<>~!?@#$%^&*()";
  for (var i = 0; i < emailLength; i++) {
    RandomEmail += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  //     OPTION 2
  //   const RandomEmail = Math.random().toString(36).substring(2, 10);

  return (
    <div>
      <h2> {RandomEmail} @facebook</h2>
    </div>
  );
}

export default PersonalEmail;
