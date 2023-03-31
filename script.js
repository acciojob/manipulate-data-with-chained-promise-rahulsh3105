const outputDiv = document.getElementById('output');

getNumbers()
  .then(numbers => {
    console.log(numbers);
    return filterOdd(numbers);
  })
  .then(evenNumbers => {
    console.log(evenNumbers);
    return doubleEven(evenNumbers);
  })
  .then(finalNumbers => {
    console.log(finalNumbers);
    outputDiv.textContent = finalNumbers.join(',');
  })
  .catch(error => {
    console.error(error);
  });
