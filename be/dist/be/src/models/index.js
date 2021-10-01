"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMongo = void 0;
const mongoose_1 = require("mongoose");
function setupMongo() {
    const DB_URL = "mongodb://127.0.0.1:27017/blog3";
    (0, mongoose_1.connect)(DB_URL);
    return new Promise((resolve, reject) => {
        mongoose_1.connection.on("connected", () => {
            console.log("connected to mongodb");
            resolve();
        });
        mongoose_1.connection.on("error", (error) => {
            console.log("mongodb数据库连接失败", error);
            reject();
        });
    });
}
exports.setupMongo = setupMongo;
__exportStar(require("../../../fe/shared/http"), exports);
