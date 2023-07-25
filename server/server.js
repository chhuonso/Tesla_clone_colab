const express = require('express')
const cors = require('cors')
const cookies = require('cookie-parser')
const app = express()
require('dotenv').config()
const port = process.env.API_PORT;
require("./config/mongoose.config");

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json(), cookies(), express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port: ${port}`));