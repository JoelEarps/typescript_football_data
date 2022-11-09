"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader/CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
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
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUtdWin++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUtdWin++;
    }
}
console.log(manUtdWin);
