import { CsvFileReader } from "./CsvFileReader/CsvFileReader";
import { MatchReader } from "./MatchReader/MatchReader";
import { MatchResult } from "./utils/matchResult";
// initial analysis - count number of times man united have won

// Create an instance of CSV file Reader
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of Match Reader and pass in something satisfying the Data reader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUtdWin: number = 0;
// enums - enumeration
// Used simply to signal to other engineers that this is a collection to many closely related values

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWin++;
  }
}

console.log(manUtdWin);
