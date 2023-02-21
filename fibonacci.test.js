const fibonacci = require("./fibonacci");

// Test Suite for fibonacci function
describe("fibonacci function", () => {
  // 1. Edge case: If necessary arguments are not provided, return an appropriate error message.
  it("should return an error message if startNum and endNum are not provided", () => {
    expect(fibonacci()).toBe(
      "You need to provide 2 arguments, as start and end number!"
    );
    expect(fibonacci(1)).toBe(
      "You need to provide 2 arguments, as start and end number!"
    );
    expect(fibonacci(undefined, 89)).toBe(
      "You need to provide 2 arguments, as start and end number!"
    );
  });

  // 2. Edge case: If the parameters are not numbers, return an appropriate error message.
  it("should return an error message if startNum or endNum are not numbers", () => {
    expect(fibonacci(NaN, 10)).toBe("Parameters must be numbers!");
    expect(fibonacci(2, NaN)).toBe("Parameters must be numbers!");
  });

  // 3. Edge case: If the parameters are not integers, return an appropriate error message.
  it("should return an error message if startNum or endNum are not integers", () => {
    expect(fibonacci(2.5, 10)).toBe("Parameters must be integers!");
    expect(fibonacci(2, "10")).toBe("Parameters must be integers!");
  });

  // 4. Edge case: If the end number is less than the start number, return an appropriate error message.
  it("should return an error message if endNum is less than startNum", () => {
    expect(fibonacci(10, 5)).toBe(
      "End number must be greater than or equal to start number!"
    );
  });

  // 5. Edge case: If the parameters are non-positive numbers, return an appropriate error message.
  it("should return an error message if startNum or endNum are non-positive numbers", () => {
    expect(fibonacci(-2, 10)).toBe(
      "Parameters cannot be a non-positive numbers!"
    );
    expect(fibonacci(-3, -1)).toBe(
      "Parameters cannot be a non-positive numbers!"
    );
  });

  // 6. Edge case: If the parameters are too large to compute, return an appropriate error message.
  it("should return an error message if startNum or endNum are too large to compute", () => {
    expect(
      fibonacci(Number.MAX_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER + 2)
    ).toBe("Parameters are too large to compute!");
  });

  // 7. Edge case: If 'startNum' is not a Fibonacci number, return an appropriate error message.
  it("should return an error message if startNum is not a Fibonacci number", () => {
    expect(fibonacci(4, 10)).toBe("Start number is not a fibonacci number!");
  });

  // 8. Edge case: If 'endNum' is not a Fibonacci number, return an appropriate error message.
  it("should return an error message if endNum is not a Fibonacci number", () => {
    expect(fibonacci(2, 11)).toBe("End number is not a fibonacci number!");
  });

  // Successful Case
  it("should return an array of Fibonacci numbers from startNum to endNum", () => {
    expect(fibonacci(1, 8)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(2, 34)).toEqual([2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(13, 144)).toEqual([13, 21, 34, 55, 89, 144]);
    expect(fibonacci(1, 89)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });
});
