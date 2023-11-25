import { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";
export const Direction = async (req: Request, res: Response) => {
    try {
        const { lat, lng } = req.body;
        const { Destination } = req.body;
        const { TravelMode } = req.body;
        const { Time } = req.body;
        //NearBus
        const nearBus_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=ป้ายรถเมล์&location=${lat}%2C${lng}&radius=10000&key=${API_KEY}`;
        //Route user > Bus
        const busRoute_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=${lat}%2C${lng}&destination=13.745704%2C100.535912&mode=${TravelMode}&key=${API_KEY}`;
        //Route Bus > Destination
        const destinationRoute_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=13.745704%2C100.535912&destination=${Destination}&mode=${TravelMode}&key=${API_KEY}`;
        
        
        
    } catch (error) {
        res.send(error);
    }
};