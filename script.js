const output = document.getElementById("output");
const array = [1, 2, 3, 4];

function filterEven() {
  return new Promise((resolve, reject) => {
    const evenArray = array.filter((e) => e % 2 == 0);
    setTimeout(() => {
      output.innerText = `${evenArray}`;
      resolve(evenArray);
    }, 1000);
  });
}

function multiplyByTwo(val) {
  return new Promise((resolve, reject) => {
    const result = val.map((e) => e * 2);
    setTimeout(() => {
      output.innerText = `${result}`;
      resolve(result);
    }, 2000);
  });
}

filterEven().then((val) => multiplyByTwo(val));