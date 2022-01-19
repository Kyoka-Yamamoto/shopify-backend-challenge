const mongoose = require("mongoose");

// Exit application on error
mongoose.connection.on("error", (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

// print mongoose logs in dev env
if (process.env.ENV === "dev") {
    mongoose.set("debug", true);
}

exports.connect = () => {
    mongoose
        .connect(process.env.MONGO_URI || "mongodb://localhost:27017")
        .then(() => console.log("mongoDB connected..."));
    return mongoose.connection;
};
