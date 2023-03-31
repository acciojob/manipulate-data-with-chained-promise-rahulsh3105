function manipulateData(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
    .then((arr) => {
      const filteredArr = arr.filter((num) => num % 2 === 0);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredArr);
        }, 1000);
      });
    })
    .then((filteredArr) => {
      const mappedArr = filteredArr.map((num) => num * 2);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mappedArr);
        }, 2000);
      });
    })
    .then((mappedArr) => {
      const outputDiv = document.getElementById("output");
      outputDiv.innerText = mappedArr.toString();
    });
}
