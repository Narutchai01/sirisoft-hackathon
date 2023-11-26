import { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";
export const Direction = async (req: Request, res: Response) => {
    try {
        const { lat, lng } = req.body;
        const { Destination } = req.body;
        const { TravelMode } = req.body;
        const { Time } = req.body;
        //only origin to destination
        // maybe fetch first transit 
        // we fetch only arrival time
        //TODO: need to know is it generate departure time, send to front end
        // fetch step as possible, them review data and send to front end
        const destination_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=13.745704%2C100.535912&destination=13.6626%2C100.4375&arrival_time=&mode=transit&key=${API_KEY}`;
        
        const geocode_URL = `https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=${API_KEY}`;
        
        const response = await axios.get(destination_URL);
        // res.send(response.data.routes[0].legs[0].steps);
        res.send(response.data.routes[0].legs[0].arrival_time);


        const data = response.data.results;
        
        
    } catch (error) {
        res.send(error);
    }
};