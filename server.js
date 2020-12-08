const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.static("public"));
// Creating the handlers
// app.get("/", (req, res) => {});

// Connecting to server
app.listen(PORT, () => console.log(`Starting server on port: ${PORT}`));
