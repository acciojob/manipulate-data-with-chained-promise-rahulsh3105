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

describe("transforming-data-with-promise-chaining-solution", () => {
  it("Check for array", () => {
    cy.visit("index.html");
    cy.window().then((win) => {
      const expectedOutput = "2, 4";
      const promise = win.manipulateData([1, 2, 3, 4]);
      cy.wrap(promise).should("eventually.deep.equal", [2, 4]);
      cy.contains("#output", expectedOutput).should("be.visible");
    });
  });
});
