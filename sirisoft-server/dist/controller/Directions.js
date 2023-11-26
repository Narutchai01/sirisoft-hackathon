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
        const { lat, lng, placeId, time: { h, m }, mode } = req.body;
        // convert time to second
        // const timecal = h * 3600 + m * 60 ;
        const date = new Date();
        date.setHours(h);
        date.setMinutes(m);
        const value = date.valueOf();
        console.log(value);
        //only origin to destination
        // maybe fetch first transit 
        // we fetch only arrival time
        //TODO: need to know is it generate departure time, send to front end
        // fetch step as possible, them review data and send to front end
        const geocode_URL = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${server_1.API_KEY}`;
        const gecode_latandlng = yield axios_1.default.get(geocode_URL);
        const deslat = gecode_latandlng.data.results[0].geometry.location.lat;
        const deslng = gecode_latandlng.data.results[0].geometry.location.lng;
        const destination_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${lat}%2C${lng}&destination=${deslat}%2C${deslng}&timetemp=${value}&mode=${mode}&key=${server_1.API_KEY}`;
        const response = yield axios_1.default.get(destination_URL);
        res.send({
            steps: response.data.routes[0].legs[0].steps,
            arrival_time: response.data.routes[0].legs[0].arrival_time,
            departure_time: response.data.routes[0].legs[0].departure_time,
            deslat: deslat,
            deslng: deslng,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.Direction = Direction;
