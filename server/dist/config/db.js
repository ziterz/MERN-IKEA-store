"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = (url) => {
    mongoose_1.default.connect(`mongoose.connect('${process.env.DB_CONN_STRING}', {dbName: 'IKEA_DB'})`);
};
exports.default = connectDB;