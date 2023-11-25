import { Long } from './../node_modules/bson/src/long';
//import Zone
import express from "express";
import { CalculateDistanceFunc } from './controller/CalculateDistaceFunc';
const cors = require("cors");
const axios = require("axios");
export const API_KEY = "AIzaSyCZBeJA2Iq-vVE3HmLe_xqw_g7S6YQIWmg";

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

// routes
app.post("/api/calculatedistance", CalculateDistanceFunc);


// listen
app.listen(port, () => {
  console.log(`Server started on at http://localhost:${port}`);
});
