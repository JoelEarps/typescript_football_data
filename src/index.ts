import { CsvFileReader } from "./CsvFileReader/CsvFileReader";
import { MatchResult } from "./utils/matchResult";
const reader = new CsvFileReader("football.csv");
reader.read();
console.log(reader.data);
// initial analysis - count number of times man united have won

let manUtdWin: number = 0;
// enums - enumeration
// Used simply to signal to other engineers that this is a collection to many closely related values

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUtdWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUtdWin++;
  }
}

console.log(manUtdWin);
