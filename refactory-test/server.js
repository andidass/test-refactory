const express = require("express");
const connectDB = require("./Config/db");

const app = express();

// mengkoneksikan database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// * define router
// pos
app.use("/login", require("./Routes/api/auth"));
app.use("/registration", require("./Routes/api/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
