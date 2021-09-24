"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AMinusB = void 0;
function AMinusB(a, b) {
    return [...a].filter((e) => !b.has(e));
}
exports.AMinusB = AMinusB;
