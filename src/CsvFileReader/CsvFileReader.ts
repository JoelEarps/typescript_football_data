import fs from "fs";
import path from "path";
// Cannot find fs unless you have a type def file
// TS reporting error incorrectly for us
// you require anything inside node standard library you need to install
// @types/node

export class CsvFileReader {
  public data: string[][] = [];

  constructor(public filename: string) {}

  public read(): void {
    // With a csv - first split variables by new line
    // Then we shall make a 2d array to get values of each column in the newly split row
    // you need to delimited by comma (hence comma seperated)
    const tempFilename = "../../" + this.filename;
    const pathName = path.resolve(__dirname, tempFilename);
    this.data = fs
      .readFileSync(pathName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
