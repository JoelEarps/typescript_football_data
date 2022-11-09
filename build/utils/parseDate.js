"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToString = void 0;
const dateToString = (date) => {
    const dateParts = date.split("/").map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateToString = dateToString;
