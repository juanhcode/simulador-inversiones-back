const express = require('express');
const app = express();
const port = 3030
const cors = require('cors');
const morgan = require('morgan');
const db = require ('./database/connection');
require('dotenv').config();
const auth = require('./routes/v1/auth.routes');
const investment = require('./routes/v1/investment.routes');
const currency = require('./routes/v1/currency.routes');
const item = require('./routes/v1/item.routes');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1/auth', auth);
app.use('/v1/investment', investment);
app.use('/v1/currency', currency);
app.use('/v1/item', item);

let server = app.listen(3000, async () => {
    await db.authenticate();
    console.log('Database online');
    //const port1 = server.address().port;
    console.log(`Application server running on ${3000}`);
});