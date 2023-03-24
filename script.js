//your JS code here. If required.
function manipulateData(inputArray) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
    .then((array) => {
      const filteredArray = array.filter((num) => num % 2 === 0);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(filteredArray);
        }, 1000);
      });
    })
    .then((array) => {
      const mappedArray = array.map((num) => num * 2);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mappedArray);
        }, 2000);
      });
    });
}

manipulateData([1, 2, 3, 4]).then((result) => {
  document.getElementById("output").textContent = result.join(", ");
});
