import axios from "axios";
import { API_KEY } from "../server";
import { Request, Response } from "express";



export const FindplacePlan = async (req: Request, res: Response) => {
    try {
        const { destination} = req.body;
        const output: string = destination.replace(/\s/g, '%2c');
        // const MAP_URL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=${output}&inputtype=textquery&key=AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4`

        const MAP_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${output}&types=shopping_mall&key=AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4&region=th`


        const response = await axios.post(MAP_URL);
        const data = response.data;;
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}