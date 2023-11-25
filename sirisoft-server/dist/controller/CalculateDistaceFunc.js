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
        const MAP_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=&location=${lat}%2c${lng}&radius=1500&type=shopping_mall&key=${server_1.API_KEY}&language=en`;
        // const MAP_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=13.721018375867724%2C100.49869457086534&destination=13.7245187%2C100.5050806&mode=driving&key=AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4`;
        const response = yield axios_1.default.get(MAP_URL);
        const data = response.data.results;
        // const result = {
        // }
        const cal = (lat1, lon1, lat2, lon2) => {
            const R = 6371; // Radius of the earth in km
            const dLat = deg2rad(lat2 - lat1); // deg2rad below
            const dLon = deg2rad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // Distance in km
            return d;
        };
        const deg2rad = (deg) => {
            return deg * (Math.PI / 180);
        };
        const result2 = data.map((item) => {
            const lat1 = lat;
            const lon1 = lng;
            const lat2 = item.geometry.location.lat;
            const lon2 = item.geometry.location.lng;
            const distance = cal(lat1, lon1, lat2, lon2);
            return {
                name: item.name,
                distance: distance,
                adress: item.vicinity
            };
        });
        const result3 = result2.sort((a, b) => {
            return a.distance - b.distance;
        });
        // const result4 = result3.map((item: any) => {
        //     return {
        //         name: item.name,
        //         distance: item.distance.toFixed(2),
        //         adress : data.vicinity
        //     }
        // })
        res.send(result3);
    }
    catch (error) {
        res.send(error);
    }
});
exports.CalculateDistanceFunc = CalculateDistanceFunc;
