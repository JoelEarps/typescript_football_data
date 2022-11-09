"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Cannot find fs unless you have a type def file
// TS reporting error incorrectly for us
// you require anything inside node standard library you need to install
// @types/node
// With a csv - first split variables by new line
// Then we shall make a 2d array to get values of each column in the newly split row
// you need to delimited by comma (hence comma seperated)
const matches = fs_1.default
    .readFileSync(path_1.default.resolve(__dirname, "../football.csv"), {
    encoding: "utf-8",
})
    .split("\n")
    .map((row) => {
    return row.split(",");
});
console.log(matches);
// initial analysis - count number of times man united have won
let manUtdWin = 0;
// enums - enumeration
// Used simply to signal to other engineers that this is a collection to many closely related values
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUtdWin++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUtdWin++;
    }
}
console.log(manUtdWin);
