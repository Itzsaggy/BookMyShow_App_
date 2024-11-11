// const express = require("express");
// const app = express();
// const connectDB = require('./dbConnection')
// const Ticket = require('./schema');
// const cors = require("cors");

// app.use(cors());
// //Middleware for parsing Json
// app.use(express.json());
// //Connecting to Database
// connectDB();
// app.use(express.urlencoded({ extended: false }))
// // creating an api and seperating it.
// app.use("/api", require("./routes"));

// app.listen(8080,()=>{
//     console.log("App listening to port 8080")
// });

// app.js or index.js
const express = require("express");
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
const app = express();
const connectDB = require('./dbConnection');
const Ticket = require('./schema');
const cors = require("cors");
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
connectDB();
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes"));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
