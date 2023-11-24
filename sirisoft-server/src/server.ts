//import Zone
import express from 'express';
const cors = require('cors');




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


// routes
app.post('/api/googlemap', );


// listen
app.listen(port, () => {
    console.log(`Server started on at http://localhost:${port}`);
});