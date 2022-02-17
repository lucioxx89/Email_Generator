import SuggestedEmail from "./SuggestedEmail";
// import names_list from "../names_List/names_list.json";

function SuggestedEmailsList() {
  const domain = "luciano-colabraro.com";
  const yearToday = new Date().getFullYear();
  const maximumYear = yearToday - 18;
  const minimunYear = yearToday - 60;

  const randomYear = () => {
    const getRandomYear = (
      Math.random() * (maximumYear - minimunYear) +
      minimunYear
    ).toFixed(0);

    if (Math.random() < 0.5) {
      return getRandomYear.toString().slice(-2);
    } else {
      return getRandomYear;
    }
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
