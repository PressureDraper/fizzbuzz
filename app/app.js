// Previous class which we obtain explorers
const Reader = require("../lib/utils/Reader");
const ExplorerService = require("../lib/services/ExplorerService")
const FizzBuzzService = require("../lib/services/FizzBuzzService")

// ExplorerService app about explorers list
// ExplorerService.filterByMission(explorers, "node")
// ExplorerService.getAmountOfExplorersByMission(explorers, "node")
// ExplorerService.getExplorersUsernamesByMission(explorers, "node")

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trick and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
const explorers = Reader.readJsonFile("explorers.json");

const nodeExplorers = ExplorerService.filterByMission(explorers, "node")

const assignTrick = function(explorer){
    const nodeExplorers = FizzBuzzService.applyValidationInExplorer(explorer)
    return nodeExplorers
}

const explorersInNodeTrick = nodeExplorers.map(explorer => assignTrick(explorer));
console.log(explorersInNodeTrick)

// FizzBuzzService single testing class
const explorer1 = {name: "Explorer1", score: 1}
console.log(FizzBuzzService.applyValidationInExplorer(explorer1)) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
console.log(FizzBuzzService.applyValidationInExplorer(explorer3)) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
console.log(FizzBuzzService.applyValidationInExplorer(explorer5)) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
console.log(FizzBuzzService.applyValidationInExplorer(explorer15)) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
