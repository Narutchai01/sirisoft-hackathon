"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_KEY = void 0;
//import Zone
const express_1 = __importDefault(require("express"));
const CalculateDistaceFunc_1 = require("./controller/CalculateDistaceFunc");
const cors = require("cors");
const axios = require("axios");
exports.API_KEY = "AIzaSyCZBeJA2Iq-vVE3HmLe_xqw_g7S6YQIWmg";
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
// listen
app.listen(port, () => {
    console.log(`Server started on at http://localhost:${port}`);
});
