"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateDistanceFunc = void 0;
const server_1 = require("../server");
const axios_1 = __importDefault(require("axios"));
const CalculateDistanceFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { lat, lng } = req.body;
        const respone = yield axios_1.default.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${server_1.API_KEY}&location=${lat},${lng}&radius=5000&type=restaurant`);
        res.send(respone);
    }
    catch (error) {
        res.send(error);
    }
});
exports.CalculateDistanceFunc = CalculateDistanceFunc;
