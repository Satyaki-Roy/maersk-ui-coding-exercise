function generateNumbersArray() {
  const numbers = [];
  for (let i = 1; i <= 9; i++) {
    numbers.push(i);
  }
  return numbers;
}

function generateShuffledArray(sortedArray = false) {
  // Create an array of numbers from 1 to 9
  let numbers = generateNumbersArray();

  if (sortedArray) {
    return numbers;
  }

  // Shuffle the array randomly
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
}

function onShuffleOrSortClickHandler(sortedArray) {
  const numberArray = generateShuffledArray(sortedArray);

  numberArray.forEach((element, index) => {
    const divHandler = document.getElementById(`${index + 1}-box`);
    const divHandlerMobile = document.getElementById(`${index + 1}-box-mobile`);

    // assign the number
    divHandler.innerHTML = element.toString();
    divHandlerMobile.nextElementSibling.innerHTML = element.toString();

    // assigning color
    if ([6, 7].includes(element)) {
      divHandler.style.backgroundColor = "#BFBFBF";
      divHandlerMobile.style.backgroundColor = "#BFBFBF";
    }
    if ([1, 8].includes(element)) {
      divHandler.style.backgroundColor = "#6F98A8";
      divHandlerMobile.style.backgroundColor = "#6F98A8";
    }
    if ([2, 4].includes(element)) {
      divHandler.style.backgroundColor = "#2B8EAD";
      divHandlerMobile.style.backgroundColor = "#2B8EAD";
    }
    if ([3, 5, 9].includes(element)) {
      divHandler.style.backgroundColor = "#2F454E";
      divHandlerMobile.style.backgroundColor = "#2F454E";
    }
  })
}


