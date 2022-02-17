import SuggestedEmail from "./SuggestedEmail";
import FirstNamesList from "../assets/FirstNamesList.json";

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

  const randomName = () => {
    const maximumIndex = FirstNamesList.length - 1;
    const minimumIndex = 0;
    const index = (
      Math.random() * (maximumIndex - minimumIndex) +
      minimumIndex
    ).toFixed(0);

    return FirstNamesList[index].toLowerCase();
  };

  const generateRandomAliases = (emailLength) => {
    const randomAliases = [];
    for (var i = 0; i < emailLength; i++) {
      if (Math.random() < 0.5) {
        randomAliases.push(randomName() + randomYear());
      } else {
        randomAliases.push(randomYear() + randomName());
      }
    }

    return randomAliases;
  };

  return (
    <div>
      <ul className="list-group-flush">
        {generateRandomAliases(10).map((alias, index) => (
          <SuggestedEmail alias={alias} domain={domain} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default SuggestedEmailsList;
