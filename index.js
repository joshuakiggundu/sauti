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
    res.sendFile(path.join(__dirname, "public", "home-1.html"));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "services.html"));
});

app.get('/servicesa', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "servicea.html"));
});

app.get('/servicesb', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "serviceb.html"));
});

app.get('/servicesc', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "servicec.html"));
});

app.get('/servicesd', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "serviced.html"));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "portfolio-1.html"));
});

app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "project-1.html"));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "team.html"));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "blog.html"));
});

app.get('/home-2', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home-2.html"));
});
// Add similar routes for other HTML pages as needed

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});