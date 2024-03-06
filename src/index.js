const express = require('express');
const app = express();
const port = 3030
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

let server = app.listen(0, () => {
    const port1 = server.address().port;
    console.log(`Application server running on ${port1}`);
});