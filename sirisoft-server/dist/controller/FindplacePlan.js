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
exports.FindplacePlan = void 0;
const axios_1 = __importDefault(require("axios"));
const FindplacePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { destination } = req.body;
        const output = destination.replace(/\s/g, '%2c');
        // const MAP_URL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=${output}&inputtype=textquery&key=AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4`
        const MAP_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${output}&types=shopping_mall&key=AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4&region=th`;
        const response = yield axios_1.default.post(MAP_URL);
        const data = response.data;
        ;
        res.send(data);
    }
    catch (error) {
        res.send(error);
    }
});
exports.FindplacePlan = FindplacePlan;
