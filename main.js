document.getElementById("submit-button").addEventListener("click", function () {
  const inputText = document.getElementById("translator-input").value.trim();
  const selectedOption = document.querySelector("input[name='translation-section']:checked").value;
  const resultsEl = document.getElementById("results");

  resultsEl.innerText = "";
  if (inputText === "") {
    resultEl.innerText = "Please enter some text.";
    return;
  }
  const displayResult = (text, func) => {
    resultsEl.innerText = func(text);
  };

  switch (selectedOption) {
    case "encode":
      displayResult(inputText, encode);
      break;

    case "translate":
      displayResult(inputText, translate);
      break;

    case "madlib":
      displayResult(inputText, madlib);
      break;

    case "search":
      const matches = search(inputText);
      if (matches.length === 0) {
        resultsEl.innerText = "No emojis found.";
      } else {
        matches.forEach(obj => {
          const p = document.createElement("p");
          p.innerText = obj.symbol;
          results.appendChild(p);
        });
      }
      break;

    case "random":
      const options = ["encode", "translate", "madlib", "search"];
      const randIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randIndex];

      document.querySelector(`input[value='${randomOption}']`).checked = true;
      document.getElementById("submit-button").click();
      break;

    default:
      resultsEl.innerText = "Unknown translation option selected.";
  }
});





