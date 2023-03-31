function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function manipulateArray(arr) {
  return delay(3000).then(() => {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    let oddNumbers = arr.filter(num => num % 2 !== 0);

    return { evenNumbers, oddNumbers };
  });
}

function filterOddNumbers(arr) {
  return delay(1000).then(() => arr.filter(num => num % 2 === 0));
}

function multiplyEvenNumbers(arr) {
  return delay(2000).then(() => arr.map(num => num * 2));
}

let inputArr = [1, 2, 3, 4];
let outputDiv = document.getElementById("output");

manipulateArray(inputArr)
  .then(result => filterOddNumbers(result.evenNumbers))
  .then(result => multiplyEvenNumbers(result))
  .then(result => {
    outputDiv.textContent = result.join(", ");
  });
