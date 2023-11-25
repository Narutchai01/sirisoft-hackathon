"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_KEY = void 0;
//import Zone
const express_1 = __importDefault(require("express"));
const CalculateDistaceFunc_1 = require("./controller/CalculateDistaceFunc");
const FindplacePlan_1 = require("./controller/FindplacePlan");
const Directions_1 = require("./controller/Directions");
const cors = require("cors");
const axios = require("axios");
exports.API_KEY = 'AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4';
// define zone
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
const port = 3000;
// routes
app.post("/api/calculatedistance", CalculateDistaceFunc_1.CalculateDistanceFunc);
app.post("/api/findplace", FindplacePlan_1.FindplacePlan);
app.post("/api/direction", Directions_1.Direction);
// listen
app.listen(port, () => {
    console.log(`Server started on at http://localhost:${port}`);
});
