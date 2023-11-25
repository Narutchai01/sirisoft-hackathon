import { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";

export const CalculateDistanceFunc = async (req: Request, res: Response) => {
    try {
        const { lat, lng } = req.body;
        const MAP_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=&location=${lat}%2c${lng}&radius=10000&type=shopping_mall&key=${API_KEY}`;

        const response = await axios.get(MAP_URL);

        res.send(response.data.results)
    } catch (error) {
        res.send(error);
    }
};