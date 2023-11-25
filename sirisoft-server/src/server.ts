//import Zone
import express from 'express';
const cors = require('cors');
import { Client } from '@googlemaps/google-maps-services-js';



// define zone
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
    }
));
const port = 3000;
const client = new Client({});


// routes
app.post('/api/googlemap', (req, res) => {
    try {

    } catch (error) {

    }
});


// listen
app.listen(port, () => {
    console.log(`Server started on at http://localhost:${port}`);
});