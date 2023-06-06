// Business Logic

function wordCounter(text) {
    if (text.length ===0){
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");

    textArray.forEach(function(word) {
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
        word = word.toUpperCase();
        element = element.toUpperCase();
      if (word === element) {
        wordCount++
      }
    });
    return wordCount;
  } 