const fbService = require("../../../lib/services/FizzBuzzService")

describe("General tests for FizzBuzzService class", () => {
    test("1. Returning FizzBuzz User", () => {
        const explorer = {name: "Explorer1", score: 15}
        const fizzbuzz = fbService.applyValidationInExplorer(explorer)

        expect(fizzbuzz.trick).toBe("FIZZBUZZ");
    });
    test("2. Returning Fizz User", () => {
        const explorer = {name: "Explorer2", score: 6}
        const fizzbuzz = fbService.applyValidationInExplorer(explorer)

        expect(fizzbuzz.trick).toBe("FIZZ");
    });
    test("3. Returning Buzz User", () => {
        const explorer = {name: "Explorer3", score: 10}
        const fizzbuzz = fbService.applyValidationInExplorer(explorer)

        expect(fizzbuzz.trick).toBe("BUZZ");
    });
});