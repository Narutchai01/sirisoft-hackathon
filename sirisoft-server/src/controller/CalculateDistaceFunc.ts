import { Response,Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";

export const CalculateDistanceFunc = async (req:Request, res:Response) => {
    try {
        const {lat,lng} = req.body;
        const respone = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=${lat},${lng}&radius=5000&type=restaurant`);
        res.send(respone);
    } catch (error) {
        res.send(error);
    }
};