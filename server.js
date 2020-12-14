const express = require("express");
const PORT = 3000;
const app = express();

// Use the express static middleware
app.use(express.static("public"));
// No need creating and using the handlers
// app.get("/", (req, res) => {});

// Staring the  server and listening for request
app.listen(PORT, () => console.log(`Starting server on port: ${PORT}`));
