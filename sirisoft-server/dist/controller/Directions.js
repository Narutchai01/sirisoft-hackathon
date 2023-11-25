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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
const server_1 = require("../server");
const Direction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { lat, lng } = req.body;
        const { Destination } = req.body;
        const { TravelMode } = req.body;
        const { Time } = req.body;
        //NearBus
        const nearBus_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=ป้ายรถเมล์&location=${lat}%2C${lng}&radius=10000&key=${server_1.API_KEY}`;
        //Route user > Bus
        const busRoute_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${lat}%2C${lng}&destination=13.745704%2C100.535912&mode=${TravelMode}&key=${server_1.API_KEY}`;
        //Route Bus > Destination
        const destinationRoute_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=13.745704%2C100.535912&destination=${Destination}&mode=${TravelMode}&key=${server_1.API_KEY}`;
    }
    catch (error) {
        res.send(error);
    }
});
exports.Direction = Direction;
