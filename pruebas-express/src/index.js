const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const indexRoute = require('./routes/indexRoute');

const app = express();

// Midlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('', indexRoute);


const port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log("Server run on port: ", port);
});