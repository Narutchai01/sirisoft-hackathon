import { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";

export const RoutesApi = async (req: Request, res: Response) => {
    try {
        const { lat, lng } = req.body;
        const MAP_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=37.773245%2C-122.469502&destination=37.773279%2C-122.468780&mode=driving&key=${API_KEY}`;

        const response = await axios.get(MAP_URL);

        res.send(response.data.results)
    } catch (error) {
        res.send(error);
    }
};