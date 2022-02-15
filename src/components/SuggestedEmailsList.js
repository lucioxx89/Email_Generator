import SuggestedEmail from "./SuggestedEmail";

function SuggestedEmailsList() {
  const domain = "luciano-colabraro.com";

  const yearToday = new Date().getFullYear();
  console.log("year Today", yearToday);

  const maximumYear = yearToday - 18;
  console.log("maximum year", maximumYear);

  const minimunYear = yearToday - 60;
  console.log("minimum year", minimunYear);

  const randomYear = () => {
    return Math.random() * (maximumYear - minimunYear) + minimunYear;
  };
  console.log("random Year", randomYear());

  const generateRandomWords = (emailLength) => {
    const randomWords = [];
    for (var i = 0; i < emailLength; i++) {
      // const word = Math.random().toString(36).substring(2, 10);
      const word = "word";
      randomWords.push(word + "_" + randomYear());
    }
    return randomWords;
  };

  return (
    <div>
      <ul className="list-group-flush">
        {generateRandomWords(10).map((alias, index) => (
          <SuggestedEmail alias={alias} domain={domain} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default SuggestedEmailsList;
