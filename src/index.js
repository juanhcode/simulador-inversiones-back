const express = require('express');
const app = express();
const port = 3030
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const auth = require('./routes/v1/auth.routes');
const path = require("path");
const db = require('./database/connection');

//Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Expo API",
            version: "1.0.0"
        },
        servers: [
            {
                url: ''
            }
        ],
    },
    apis: [`${path.join(__dirname, "./routes/v1/*.js")}`]
}

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/v1/login', auth);
app.use("/v1/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

let server = app.listen(0, async () => {
    await db.authenticate();
    console.log('Database online');
    const port1 = server.address().port;
    console.log(`Application server running on ${port1}`);
});