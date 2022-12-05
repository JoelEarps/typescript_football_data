"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader/CsvFileReader");
const MatchReader_1 = require("./MatchReader/MatchReader");
const matchResult_1 = require("./utils/matchResult");
// initial analysis - count number of times man united have won
// Create an instance of CSV file Reader
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create an instance of Match Reader and pass in something satisfying the Data reader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUtdWin = 0;
// enums - enumeration
// Used simply to signal to other engineers that this is a collection to many closely related values
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUtdWin++;
    }
    else if (match[2] === "Man United" && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUtdWin++;
    }
}
console.log(manUtdWin);
