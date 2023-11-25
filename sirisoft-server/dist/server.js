"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Zone
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const google_maps_services_js_1 = require("@googlemaps/google-maps-services-js");
// define zone
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
const port = 3000;
const client = new google_maps_services_js_1.Client({});
// routes
app.post('/api/googlemap', (req, res) => {
    try {
    }
    catch (error) {
    }
});
// listen
app.listen(port, () => {
    console.log(`Server started on at http://localhost:${port}`);
});
