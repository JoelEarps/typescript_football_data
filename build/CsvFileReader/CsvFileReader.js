"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Cannot find fs unless you have a type def file
// TS reporting error incorrectly for us
// you require anything inside node standard library you need to install
// @types/node
const parseDate_1 = require("../utils/parseDate");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        // With a csv - first split variables by new line
        // Then we shall make a 2d array to get values of each column in the newly split row
        // you need to delimited by comma (hence comma seperated)
        const tempFilename = "../../" + this.filename;
        const pathName = path_1.default.resolve(__dirname, tempFilename);
        this.data = fs_1.default
            .readFileSync(pathName, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map((row) => {
            return [
                (0, parseDate_1.dateToString)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
