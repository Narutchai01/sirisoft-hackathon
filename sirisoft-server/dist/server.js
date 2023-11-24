"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Zone
const express_1 = __importDefault(require("express"));
const cors = require('cors');
// define zone
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
const port = 3000;
// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// listen
app.listen(port, () => {
    console.log(`Server started on at http://localhost:${port}`);
});
