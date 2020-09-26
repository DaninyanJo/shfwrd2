function shuffle(str) {
    str = str.toUpperCase();
    let word = str.split("");
    for (let i = 0; i < word.length; i++) {
      let currentValue = word[i];
      let randomIndex = Math.floor(Math.random() * word.length);
      word[i] = word[randomIndex];
      word[randomIndex] = currentValue;
    }
    if (inputText.value.length <= 2) {
      alert("Слово должно быть от 3 до 15 букв");
    } else if (str == word.join("")) {
      shuffle(inputText.value);
    } else {
      addElement();
    }
    function addElement() {
      output.innerHTML = "";
      word.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element;
        output.appendChild(li);
      });
    }
    cheker()
  }

  function cheker() {
    let letters = document.getElementsByTagName('li')
    let test_word = []
    let current_word = inputText.value.toUpperCase()
    for (let i = 0; i <letters.length; i++){
        test_word.push(letters[i].textContent)
    }
    if (current_word ==  test_word.join('').toUpperCase()){
        document.querySelector('.shuffled-letters').classList.add('complete')   
        
    } else{
        document.querySelector('.shuffled-letters').classList.remove('complete')
    }
  }