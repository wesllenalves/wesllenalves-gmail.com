const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

var ip = require("ip");
console.log( ip.address() );

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3333);
