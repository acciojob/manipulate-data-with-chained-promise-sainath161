//your JS code here. If required.
function manipulateDataAndPrint(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
  .then((array) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredArray = array.filter(num => num % 2 === 0);
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((evenArray) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedArray = evenArray.map(num => num * 2);
        resolve(multipliedArray);
      }, 2000);
    });
  })
  .then((finalArray) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = finalArray.join(", ");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}

// Example usage
const inputArray = [1, 2, 3, 4];
manipulateDataAndPrint(inputArray);
