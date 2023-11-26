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
        // convert time to second
        const time = (hour * 60 * 60) + (minute * 60);
        //only origin to destination
        // maybe fetch first transit 
        // we fetch only arrival time
        //TODO: need to know is it generate departure time, send to front end
        // fetch step as possible, them review data and send to front end
        const destination_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=13.745704%2C100.535912&destination=13.6626%2C100.4375&arrival_time=&mode=transit&key=${server_1.API_KEY}`;
        const geocode_URL = `https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=${server_1.API_KEY}`;
        const response = yield axios_1.default.get(destination_URL);
        // res.send(response.data.routes[0].legs[0].steps);
        res.send(response.data.routes[0].legs[0].arrival_time);
        const data = response.data.results;
    }
    catch (error) {
        res.send(error);
    }
});
exports.Direction = Direction;
