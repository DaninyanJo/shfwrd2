

inputText.addEventListener("change", () => {
  if (inputText.value.length != 0) {
    inputText.classList.add("hasletter");
  } else {
    inputText.classList.remove("hasletter");
  }
});

shuffleBtn.addEventListener("click", () => {
  shuffle(inputText.value);
});

randomWord.addEventListener("click", () => {
  sendRequest("GET", requestURL)
    .then((data) => {
      let randomIndex = Math.floor(Math.random() * data.length);
      inputText.value = data[randomIndex];
      shuffle(inputText.value);
    })
    .catch((err) => console.log(err));
});

function sendRequest(method, url, str = null) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

