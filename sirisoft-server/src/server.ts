//import Zone
import express from 'express';
const cors = require('cors');




// define zone
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;


// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// listen
app.listen(port, () => {
    console.log(`Server started on at http://localhost:${port}`);
});