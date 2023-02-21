const fibonacci = (startNum, endNum) => {
  // 1. Edge case: If necessary arguments are not provided, return an appropriate error message.
  if (startNum === undefined || endNum === undefined) {
    return "You need to provide 2 arguments, as start and end number!";
  }
  // 2. Edge case: If the parameters are not numbers, return an appropriate error message.
  if (isNaN(startNum) || isNaN(endNum)) {
    return "Parameters must be numbers!";
  }
  // 3. Edge case: If the parameters are not integers, return an appropriate error message.
  if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
    return "Parameters must be integers!";
  }
  // 4. Edge case: If the end number is less than the start number, return an appropriate error message.
  if (startNum > endNum) {
    return "End number must be greater than or equal to start number!";
  }
  // 5. Edge case: If the parameters are non-positive numbers, return an appropriate error message.
  if (endNum <= 0 || startNum <= 0) {
    return "Parameters cannot be a non-positive numbers!";
  }
  // 6. Edge case: If the parameters are too large to compute, return an appropriate error message.
  if (startNum > Number.MAX_SAFE_INTEGER || endNum > Number.MAX_SAFE_INTEGER) {
    return "Parameters are too large to compute!";
  }

  /* ALGORITHM START */
  const fibonacciNumbers = [];
  let haveYouReachedStartNum = false,
    total = 0,
    temp = 1;

  // Create an array of Fibonacci numbers starting from 'startNum' and ending with 'endNum'.
  while (total < endNum) {
    total += temp;
    temp = total - temp;

    // Check if 'startNum' has been reached.
    if (total === startNum) {
      haveYouReachedStartNum = true;
    }
    // If 'startNum' has been reached, push the current Fibonacci number into the 'fibonacciNumbers' array.
    if (haveYouReachedStartNum) {
      fibonacciNumbers.push(total);
    }
  }
  /* ALGORITHM END */

  // 7. Edge case: If 'startNum' is not a Fibonacci number, return an appropriate error message.
  if (!haveYouReachedStartNum) {
    return "Start number is not a fibonacci number!";
  }
  // 8. Edge case: If 'endNum' is not a Fibonacci number, return an appropriate error message.
  if (endNum !== fibonacciNumbers[fibonacciNumbers.length - 1]) {
    return "End number is not a fibonacci number!";
  }
  // Return the array of Fibonacci numbers.
  return fibonacciNumbers;
};

module.exports = fibonacci;
