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
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // Implcitely saying Match Data is an array
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
        });
    }
}
exports.CsvFileReader = CsvFileReader;
