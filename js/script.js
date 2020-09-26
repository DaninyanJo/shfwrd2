
const requestURL =
  "https://raw.githubusercontent.com/RazorSh4rk/random-word-api/master/words.json";

let el = document.querySelector(".shuffled-letters");
let sortable = Sortable.create(el);
//------------
let inputText = document.querySelector(".shuffle-word");
let shuffleBtn = document.querySelector(".shuffle-btn");
let randomWord = document.querySelector(".random-word");
let output = el

inputText.addEventListener("change", () => {
  if (inputText.value.length != 0) {
    inputText.classList.add("hasletter");
  } else {
    inputText.classList.remove("hasletter");
  }
});

shuffleBtn.addEventListener("click", () => {
  shuffle(inputText.value)
});


randomWord.addEventListener("click", () => {
    sendRequest("GET", requestURL)
        .then(data =>{ 
            let randomIndex = Math.floor(Math.random()*data.length) 
            // console.log(data[randomIndex])
            inputText.value= data[randomIndex];
            shuffle(inputText.value)
        })
        .catch(err => console.log(err));
});
function sendRequest(method, url, str = null) {
    return fetch(url).then(response => {
        return response.json()
    });
  }


  function shuffle(str) {
    str = str.toUpperCase()
    let currentStr = str + '';
    let word = str.split("");
    for (let i = 0; i < word.length; i++) {
      let currentValue = word[i];
      let randomIndex = Math.floor(Math.random() * word.length);
      word[i] = word[randomIndex];
      word[randomIndex] = currentValue;
    }
    if(inputText.value.length <= 2){
      alert('Слово должно быть от 3 до 15 букв')
    }else if (str == word.join('')){
      shuffle(inputText.value)
    }else {
      addElement()
    }
    function addElement() {
      output.innerHTML = ''
      word.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element;
        output.appendChild(li);
      });
    }
  
  }