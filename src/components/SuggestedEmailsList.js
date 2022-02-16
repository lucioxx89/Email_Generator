import SuggestedEmail from "./SuggestedEmail";

function SuggestedEmailsList() {
  const domain = "luciano-colabraro.com";

  const yearToday = new Date().getFullYear();
  console.log("year Today", yearToday);

  const maximumYear = yearToday - 18;
  console.log("maximum year", maximumYear);

  const minimunYear = yearToday - 60;
  console.log("minimum year", minimunYear);

  // const getRandomYear = (
  //   Math.random() * (maximumYear - minimunYear) +
  //   minimunYear
  // ).toFixed(0);

  const randomYear = () => {
    const getRandomYear = (
      Math.random() * (maximumYear - minimunYear) +
      minimunYear
    ).toFixed(0);
    if (getRandomYear > 1982) {
      return getRandomYear.toString().slice(-2);
    } else return getRandomYear;
  };

  const generateRandomWords = (emailLength) => {
    const randomWords = [];
    for (var i = 0; i < emailLength; i++) {
      const word = Math.random().toString(36).substring(2, 10);

      randomWords.push(word + "_" + randomYear());
      randomWords.push(randomYear() + "_" + word);
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
