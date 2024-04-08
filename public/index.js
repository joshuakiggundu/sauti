// const express = require("express");
// const app = express()

// app.get('/services.html', (req, res) => {
//     res.send('/services.html')
// })

// app.listen(3000, () => {
//     console.log("listening in")
// })


const express = require("express");
const path = require("path"); // Import the path module

const app = express();

// Serve static files from the "public" directory
app.use( '/', express.static(path.join(__dirname, 'public')));

// Define a route to serve each HTML page individually
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "services.html"));
});

// Add similar routes for other HTML pages as needed

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});