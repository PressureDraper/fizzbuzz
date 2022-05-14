const Reader = require("../../../lib/utils/Reader");
const eService = require("../../../lib/services/ExplorerService")

describe("General tests for ExplorerService class", () => {
    test("1. Getting all node users from explorers.json", () => {
        const explorers = Reader.readJsonFile("./app/explorers.json");
        const result = eService.filterByMission(explorers, "node")

        const explorers2 = result.filter(explorer => explorer.mission == "java");
        console.log(explorers2)
        
        expect(result).not.toBeUndefined();
        expect(explorers2).toStrictEqual([]);
    });
    test("2. Getting number of node users from explorers.json", () => {
        const explorers = Reader.readJsonFile("./app/explorers.json");
        const result = eService.getAmountOfExplorersByMission(explorers, "node")
        
        expect(result).toBe(10);
    });
    test("3. Getting explorers username by mission", () => {
        const explorers = Reader.readJsonFile("./app/explorers.json");
        const node = eService.getExplorersUsernamesByMission(explorers, "node")
        const java = eService.getExplorersUsernamesByMission(explorers, "java")

        let num = node.length
        let num2 = java.length
        
        expect(num).toBe(10);
        expect(num2).toBe(5);
    });
});