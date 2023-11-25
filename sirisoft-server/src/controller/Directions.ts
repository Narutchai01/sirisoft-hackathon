import { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";
export const Direction = async (req: Request, res: Response) => {
    try {
        const { lat, lng ,deslat,deslng , hour , minute , travalmode } = req.body;

        // convert time to second
        const time = (hour * 60 * 60) + (minute * 60);
        
        //only origin to destination
        // maybe fetch first transit 
        // we fetch only arrival time
        //TODO: need to know is it generate departure time, send to front end
        // fetch step as possible, them review data and send to front end
        const destination_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=13.745704%2C100.535912&destination=13.6626%2C100.4375&arrival_time=&mode=transit&key=${API_KEY}`;
        
        
        const response = await axios.get(destination_URL);
        res.send(response.data.routes[0].legs[0].steps);


        const data = response.data.results;
        
        
    } catch (error) {
        res.send(error);
    }
};