const express = require('express');
const app = express();
const port = 3030
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const auth = require('./routes/v1/auth.routes');
const investment = require('./routes/v1/investment.routes');

const db = require('./database/connection');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1/auth', auth);
app.use('/v1/investment', investment);

let server = app.listen(4060, async () => {
    await db.authenticate();
    console.log('Database online');
    //const port1 = server.address().port;
    console.log(`Application server running on ${4060}`);
});