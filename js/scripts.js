// Business Logic

function wordCounter(text) {
    if (text.length ===0){
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");

    s textArray.forEach(function(word) {
      wordCount++;
    });
    return wordCount;
  }

// Business Logic -updated test

function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(word) {
    if (!Number(word)) {
        wordCount++;
    }
    })
    return wordCount;
  }

  // Business Logic

// wordCounter() function omitted for brevity.

function numberOfOccurrencesInText(word, text) {
    return 0;
  }

  function numberOfOccurrencesInText(word, text) {
    if (word === text) {
      return 1;
    }
    return 0;
  } 

  function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (word.toUpperCase() === element.toUpperCase()) {
        wordCount++
      }
    });
    return wordCount;
  } 

  function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }

  function omitswears(text) {
    const textArray = text.split(" ")
    const swearWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
    textArray.forEach(function(element){
        if(swearWords.includes(element.toLowerCase())){
         const swears = swearWords.indexOf(element);
         let newElement = element.replace(swearWords[swears], "censored");
          const findSwears = textArray.indexOf(element)
          console.log (element);
          textArray[findSwears] = newElement;
        }
      })
      return textArray;s

    };