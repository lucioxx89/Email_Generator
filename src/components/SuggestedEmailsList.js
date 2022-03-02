import SuggestedEmail from "./SuggestedEmail";
import FirstNamesList from "../assets/FirstNamesList.json";
import LastNamesList from "../assets/LastNamesList.json";
import { useState } from "react";

function SuggestedEmailsList(props) {
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

  const randomLastName = () => {
    const lastNamesmaximumIndex = LastNamesList.length - 1;
    const lastNamesminimumIndex = 0;
    const index = (
      Math.random() * (lastNamesmaximumIndex - lastNamesminimumIndex) +
      lastNamesminimumIndex
    ).toFixed(0);

    return LastNamesList[index];
  };
  const randomFirstName = () => {
    const firstNamesmaximumIndex = FirstNamesList.length - 1;
    const firstNamesminimumIndex = 0;
    const index = (
      Math.random() * (firstNamesmaximumIndex - firstNamesminimumIndex) +
      firstNamesminimumIndex
    ).toFixed(0);

    return FirstNamesList[index].toLowerCase();
  };

  const generateRandomAliases = (emailLength) => {
    const randomAliases = [];
    for (var i = 0; i < emailLength; i++) {
      if (Math.random() < 0.5) {
        randomAliases.push(
          randomFirstName() + "." + randomLastName() + randomYear()
        );
      } else {
        randomAliases.push(
          randomYear() +
            randomFirstName().toString().slice(-1) +
            "." +
            randomLastName()
        );
      }
    }

    return randomAliases;
  };

  return (
    <div>
      <ul className="list-group-flush">
        {generateRandomAliases(10).map((alias, index) => (
          <SuggestedEmail alias={alias} domain={props.domain} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default SuggestedEmailsList;
