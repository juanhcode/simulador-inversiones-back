const express = require('express');
const app = express();
const port = 3030
const cors = require('cors');
const morgan = require('morgan');
const db = require ('./database/connection');
require('dotenv').config();

const investment = require('./routes/v1/inversion.route');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1/investment', investment);

let server = app.listen(8080, () => {
    const port1 = server.address().port;
    console.log(`Application server running on ${port1}`);
});