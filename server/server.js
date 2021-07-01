const dotenv= require('dotenv');
dotenv.config({path: './config.env'});

const express= require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Importing conn file
require('./db/conn');

// Importing routing module
const ApiRouter = require('./route/route');

// Middle wares
app.use(express.json());
app.use(cookieParser())
app.use('/users/api/v1', ApiRouter);

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})