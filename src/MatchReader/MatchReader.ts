// Second Approach - interfaces
import { dateToString } from "../utils/parseDate";
import { MatchResult } from "../utils/matchResult";
import { MatchData } from "../utils/rowTuple";
interface DataReader {
  read(): void;
  data: string[][];
}
// Remeber Short hand for
export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateToString(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
