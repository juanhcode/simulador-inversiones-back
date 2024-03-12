const express = require('express');
const app = express();
const port = 3030
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const auth = require('./routes/v1/auth.routes')

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1/login', auth);

let server = app.listen(0, () => {
    const port1 = server.address().port;
    console.log(`Application server running on ${port1}`);
});