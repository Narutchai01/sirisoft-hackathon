import { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";
export const Direction = async (req: Request, res: Response) => {
    try {
        const { lat, lng, placeId, time:{ h, m }, mode }:any = req.body;

        // convert time to second
        // const timecal = h * 3600 + m * 60 ;
        const date = new Date();
        date.setHours(h);
        date.setMinutes(m);

        const value = date.valueOf();

        console.log(value);
        

        //only origin to destination
        // maybe fetch first transit 
        // we fetch only arrival time
        //TODO: need to know is it generate departure time, send to front end
        // fetch step as possible, them review data and send to front end
        const geocode_URL = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${API_KEY}`;

        const gecode_latandlng = await axios.get(geocode_URL);
        const deslat = gecode_latandlng.data.results[0].geometry.location.lat;
        const deslng = gecode_latandlng.data.results[0].geometry.location.lng;

        const destination_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${lat}%2C${lng}&destination=${deslat}%2C${deslng}&timetemp=${value}&mode=${mode}&key=${API_KEY}`;

        
        
        const response = await axios.get(destination_URL);
        // res.send(response.data.routes[0].legs[0].steps);
        // res.send(response.data.routes[0].legs[0].arrival_time);
        // res.send(response.data.routes[0].legs[0].departure_time);

        res.send(
            {
                steps: response.data.routes[0].legs[0].steps,
                arrival_time: response.data.routes[0].legs[0].arrival_time,
                departure_time: response.data.routes[0].legs[0].departure_time
            }
        )

    } catch (error) {
        res.send(error);
    }
};