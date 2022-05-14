const Reader = require("../../../lib/utils/Reader");

describe("Testing Reader class", () => {
    test("1. Reading explorers.json file", () => {
        const explorers = Reader.readJsonFile("./app/explorers.json");
        expect(explorers).not.toBeUndefined();
    });
});