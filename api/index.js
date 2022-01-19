require("dotenv").config();

const express = require("express");
var cors = require("cors");

const routes = require("./routes");

const mongoose = require("./config/mongoose");

const app = express();
const port = 8000;

mongoose.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        // Handle the error here
        console.error("Bad JSON");
        res.status(500).send("JSON parse error");
    } else {
        // Pass the error to the next middleware if it wasn't a JSON parse error
        next();
    }
});

app.use("/", routes);

app.listen(port, () => console.log(`server started on port ${port}`));
