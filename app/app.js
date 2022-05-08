// Previous class which we obtain explorers
const Reader = require("../lib/utils/Reader");
const ExplorerService = require("../lib/services/ExplorerService")

// ExplorerService app about explorers list
// ExplorerService.filterByMission(explorers, "node")
// ExplorerService.getAmountOfExplorersByMission(explorers, "node")
// ExplorerService.getExplorersUsernamesByMission(explorers, "node")

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trick and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
const explorers = Reader.readJsonFile("explorers.json");

const nodeExplorers = ExplorerService.filterByMission(explorers, "node")

const assignTrick = function(explorer){
    if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    }else if (explorer.score%3 === 0) {
        explorer.trick = "FIZZ";
        return explorer;
    } else if (explorer.score%5 === 0) {
        explorer.trick = "BUZZ";
        return explorer;
    } else {
        explorer.trick = explorer.score;
        return explorer;
    }
}

const explorersInNodeTrick = nodeExplorers.map(explorer => assignTrick(explorer));
console.log(explorersInNodeTrick)
