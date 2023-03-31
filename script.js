function manipulateData(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then((arr) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredArr = arr.filter((num) => num % 2 !== 1);
        resolve(filteredArr);
      }, 1000);
    });
  })
  .then((arr) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const mappedArr = arr.map((num) => num * 2);
        resolve(mappedArr);
      }, 2000);
    });
  })
  .then((arr) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = arr.join(",");
  });
}

manipulateData([1, 2, 3, 4]);
