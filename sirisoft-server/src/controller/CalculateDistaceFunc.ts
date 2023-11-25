import e, { Response, Request } from "express";
import { API_KEY } from "../server";
import axios from "axios";

export const CalculateDistanceFunc = async (req: Request, res: Response) => {
    try {
        const { lat, lng } = req.body;
        const MAP_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=&location=${lat}%2c${lng}&radius=1500&type=shopping_mall&key=${API_KEY}&language=en`;
        // const MAP_URL = `https://maps.googleapis.com/maps/api/directions/json?origin=13.721018375867724%2C100.49869457086534&destination=13.7245187%2C100.5050806&mode=driving&key=AIzaSyBkY8q3PCEZFCjDJrvIO75yHM6d3H-LzQ4`;


        const response = await axios.get(MAP_URL);

        const data = response.data.results;

        // const result = {

        // }
        const cal = (lat1: number, lon1: number, lat2: number, lon2: number) => {
            const R = 6371; // Radius of the earth in km
            const dLat = deg2rad(lat2 - lat1);  // deg2rad below
            const dLon = deg2rad(lon2 - lon1);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
                ;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // Distance in km
            return d;
        }

        const deg2rad = (deg: number) => {
            return deg * (Math.PI / 180)
        }

        const result2 = data.map((item: any) => {
            const lat1 = lat;
            const lon1 = lng;
            const lat2 = item.geometry.location.lat;
            const lon2 = item.geometry.location.lng;
            const distance = cal(lat1, lon1, lat2, lon2);
            return {
                name: item.name,
                distance: distance,
                adress : item.vicinity,
                place_id : item.place_id
            }
        })

        const result3 = result2.sort((a: any, b: any) => {
            return a.distance - b.distance;
        })

        // const result4 = result3.map((item: any) => {
        //     return {
        //         name: item.name,
        //         distance: item.distance.toFixed(2),
        //         adress : data.vicinity
        //     }
        // })

        
        res.send(result3);

    } catch (error) {
        res.send(error);
    }
};