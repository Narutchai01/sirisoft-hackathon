import { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";
export const Direction = async (req: Request, res: Response) => {
    try {
        const { lat, lng ,deslat,deslng , hour , minute , travalmode } = req.body;

        // convert time to second
        const time = (hour * 60 * 60) + (minute * 60);
        
        //only origin to destination
        // maybe fetch first transit the
        // we fetch only arrival time
        //TODO: need to is it generate departure time, send to front end
        // fetch step as possible, them review data and send to front end
        const destination_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${lat}%2c${lng}&destination${deslat}%2c${deslng}&mode=${travalmode}&arrival_time=${time}&key=${API_KEY}`;
        
        
        const response = await axios.get(destination_URL);

        const data = response.data.results;
        
        
    } catch (error) {
        res.send(error);
    }
};