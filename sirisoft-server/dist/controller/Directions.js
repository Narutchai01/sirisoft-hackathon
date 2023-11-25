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
exports.Direction = void 0;
const server_1 = require("../server");
const axios_1 = __importDefault(require("axios"));
const Direction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { lat, lng, deslat, deslng, hour, minute, travalmode } = req.body;
        //only origin to destination
        // maybe fetch first transit the
        // we fetch only arrival time
        //TODO: need to is it generate departure time, send to front end
        // fetch step as possible, them review data and send to front end
        const destination_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${lat}%2c${lng}&mode=transit&key=${server_1.API_KEY}`;
        const response = yield axios_1.default.get(destination_URL);
        const data = response.data.results;
    }
    catch (error) {
        res.send(error);
    }
});
exports.Direction = Direction;
