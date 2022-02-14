import SuggestedEmail from "./SuggestedEmail";

function SuggestedEmailsList() {
  const domain = "luciano-colabraro.com";

  const generateRandomWords = (emailLength) => {
    const randomWords = [];
    for (var i = 0; i < emailLength; i++) {
      const word = Math.random().toString(36).substring(2, 10);
      randomWords.push(word);
    }
    return randomWords;
  };

  return (
    <div>
      <ul class="list-group-flush">
        {generateRandomWords(10).map((alias) => (
          <SuggestedEmail alias={alias} domain={domain} />
        ))}
      </ul>
    </div>
  );
}

export default SuggestedEmailsList;
