import { Long } from './../node_modules/bson/src/long';
//import Zone
import express from "express";
import { CalculateDistanceFunc } from './controller/CalculateDistaceFunc';
import { FindplacePlan } from './controller/FindplacePlan';
import { Direction } from './controller/Directions';
const cors = require("cors");
const axios = require("axios");
export const API_KEY = 'AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4';

// define zone
const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }
));
const port = 3000;
// const client = new Client({});

// routes
app.post("/api/calculatedistance", CalculateDistanceFunc);
app.post("/api/findplace", FindplacePlan);
app.post("/api/direction", Direction);

// listen
app.listen(port, () => {
  console.log(`Server started on at http://localhost:${port}`);
});
